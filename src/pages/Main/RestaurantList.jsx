import React, { useContext } from "react";

import RestaurantsContext from "../../context/RestaurantsContext";

import RestaurantCard from "./RestaurantCard";

export default function RestaurantList() {
	const { restaurants, isLoading } = useContext(RestaurantsContext);

	const restaurantsElement = restaurants.map((restaurant) => (
		<RestaurantCard key={restaurant.location_id} restaurant={restaurant} />
	));

	if (isLoading.fetching) {
		return <p>Loading ...</p>;
	}

	return (
		<section className="px-10 py-8">
			<h1 className="text-xl mb-8">All Restaurants</h1>
			<ul className="grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-6">
				{restaurantsElement}
			</ul>
		</section>
	);
}
