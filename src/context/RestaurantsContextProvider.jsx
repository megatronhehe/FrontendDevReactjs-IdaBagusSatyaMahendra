import React, { useEffect, useState } from "react";

import RestaurantsContext from "./RestaurantsContext";

export default function RestaurantsContextProvider({ children }) {
	// restaurants data/list
	const [restaurants, setRestaurants] = useState([]);

	// loading state
	const [isLoading, setIsLoading] = useState({
		fetching: true,
	});

	// error message state
	const [error, setError] = useState("");

	// OpenNow filter state
	const [isOpenNowFilter, setIsOpenNowFilter] = useState(false);

	// Price filter state
	const [priceFilter, setPriceFilter] = useState("");

	// Categories filter state (client side sorry)
	const [categoriesFilter, setCategoriesFilter] = useState("");

	// get all categories available
	const categoriesArray =
		restaurants.length > 0
			? [
					...new Set(
						restaurants.map((restaurant) => restaurant.categories).flat()
					),
			  ]
			: [];

	// function to fetch restaurants
	const fetchRestaurants = async () => {
		setIsLoading((prev) => ({ ...prev, fetching: true }));
		setError("");
		try {
			const res = await fetch("http://localhost:3000/restaurants");
			if (!res.ok) {
				return setError(res.statusText);
			}

			const data = await res.json();
			setRestaurants(data);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading((prev) => ({ ...prev, fetching: false }));
		}
	};

	// fetch data on render
	useEffect(() => {
		fetchRestaurants();
	}, []);

	// filtered restaurants
	const filteredRestaurants = restaurants.filter((restaurant) => {
		const isOpenNowMatch =
			!isOpenNowFilter || (isOpenNowFilter && !restaurant.is_closed);

		const isPriceMatch = !priceFilter || priceFilter === restaurant.price_level;

		const isCategoryMatch =
			!categoriesFilter || restaurant.categories.includes(categoriesFilter);

		return isOpenNowMatch && isPriceMatch && isCategoryMatch;
	});

	// clear filter
	const clearFilter = () => {
		setIsOpenNowFilter(false);
		setPriceFilter("");
		setCategoriesFilter("");
	};

	return (
		<RestaurantsContext.Provider
			value={{
				filteredRestaurants,
				isLoading,
				error,
				fetchRestaurants,
				// for filtering purposes
				clearFilter,
				setIsOpenNowFilter,
				isOpenNowFilter,
				priceFilter,
				setPriceFilter,
				categoriesFilter,
				setCategoriesFilter,
				categoriesArray,
			}}
		>
			{children}
		</RestaurantsContext.Provider>
	);
}
