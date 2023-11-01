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

	// api options
	const url = "https://worldwide-restaurants.p.rapidapi.com/search";
	const options = {
		method: "POST",
		headers: {
			"content-type": "application/x-www-form-urlencoded",
			"X-RapidAPI-Key": "e99b8f3cd3msh7c78dca16bcf387p186ae8jsn37864fac80e2",
			"X-RapidAPI-Host": "worldwide-restaurants.p.rapidapi.com",
		},
		body: new URLSearchParams({
			language: "en_US",
			location_id: "297704",
			currency: "USD",
			offset: "0",
		}),
	};

	// function to fetch restaurants
	const fetchRestaurants = async () => {
		setIsLoading((prev) => ({ ...prev, fetching: true }));
		setError("");
		try {
			const res = await fetch(url, options);
			if (!res.ok) {
				return setError(res.statusText);
			}

			const data = await res.json();
			setRestaurants(data.results.data);
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
