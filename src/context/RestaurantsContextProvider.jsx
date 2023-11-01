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

	return (
		<RestaurantsContext.Provider
			value={{ restaurants, isLoading, error, fetchRestaurants }}
		>
			{children}
		</RestaurantsContext.Provider>
	);
}
