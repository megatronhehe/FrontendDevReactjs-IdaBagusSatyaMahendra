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

	useEffect(() => {
		fetchRestaurants();
	}, []);

	// filtered restaurants
	const filteredRestaurants = restaurants.filter((restaurant) => {
		const isOpenNowMatch =
			!isOpenNowFilter || (isOpenNowFilter && !restaurant.is_closed);

		const isPriceMatch = !priceFilter || priceFilter === restaurant.price_level;

		return isOpenNowMatch && isPriceMatch;
	});

	// clear
	const clearFilter = () => {
		setIsOpenNowFilter(false);
		setPriceFilter("");
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
			}}
		>
			{children}
		</RestaurantsContext.Provider>
	);
}
