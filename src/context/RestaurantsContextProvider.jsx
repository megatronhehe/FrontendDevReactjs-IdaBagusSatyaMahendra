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

	// OpenNow filter
	const [isOpenNowFilter, setIsOpenNowFilter] = useState(null);

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

	const filteredRestaurants = restaurants.filter((restaurant) => {
		const isOpenNowMatch =
			isOpenNowFilter === null || (isOpenNowFilter && !restaurant.is_closed);

		return isOpenNowMatch;
	});

	return (
		<RestaurantsContext.Provider
			value={{
				filteredRestaurants,
				isLoading,
				error,
				fetchRestaurants,
				setIsOpenNowFilter,
				isOpenNowFilter,
			}}
		>
			{children}
		</RestaurantsContext.Provider>
	);
}
