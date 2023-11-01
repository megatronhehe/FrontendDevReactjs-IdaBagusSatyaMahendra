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

		return isOpenNowMatch;
	});

	// clear
	const clearFilter = () => {
		setIsOpenNowFilter(false);
	};

	return (
		<RestaurantsContext.Provider
			value={{
				filteredRestaurants,
				isLoading,
				error,
				clearFilter,
				fetchRestaurants,
				setIsOpenNowFilter,
				isOpenNowFilter,
			}}
		>
			{children}
		</RestaurantsContext.Provider>
	);
}
