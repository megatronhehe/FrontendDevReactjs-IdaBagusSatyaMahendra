import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import defaultimg from "../../assets/defaultimg.jpg";

import LoadingPage from "./LoadingPage";
import ErrorPage from "./ErrorPage";

import DetailsPage from "./DetailsPage";

export default function RestaurantDetails() {
	const { id } = useParams();

	const [thisRestaurant, setThisRestaurant] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState("");

	const fetchRestaurant = async () => {
		setIsLoading(true);
		setError("");
		try {
			const res = await fetch(`http://localhost:3000/restaurants/${id}`);
			if (!res.ok) {
				return setError(res.statusText);
			}

			const data = await res.json();
			setThisRestaurant(data);
		} catch (error) {
			setError(error);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchRestaurant();
	}, []);

	// Loading
	if (isLoading) {
		return <LoadingPage />;
	}

	// error
	if (error.length > 0) {
		return <ErrorPage error={error} fetchRestaurant={fetchRestaurant} />;
	}

	// normal
	return <DetailsPage thisRestaurant={thisRestaurant} />;
}
