import React, { useContext } from "react";

import RestaurantsContext from "../../context/RestaurantsContext";

import RestaurantCard from "./RestaurantCard";

import { TbLoader } from "react-icons/tb";

export default function RestaurantList() {
	const { restaurants, isLoading, error, fetchRestaurants } =
		useContext(RestaurantsContext);

	const restaurantsElement = restaurants.map((restaurant) => (
		<RestaurantCard key={restaurant.location_id} restaurant={restaurant} />
	));

	if (isLoading.fetching) {
		return (
			<section className="flex items-center justify-center gap-2 py-24">
				<TbLoader className="animate-spin" />
				Loading...
			</section>
		);
	}

	if (error.length > 0) {
		return (
			<section className="flex flex-col items-center justify-center gap-4 py-24">
				{error}
				<button
					onClick={fetchRestaurants}
					className="px-4 py-1 text-sm text-white duration-200 bg-blue-400 border border-blue-400 hover:bg-white hover:text-blue-400"
				>
					Retry
				</button>
			</section>
		);
	}

	return (
		<section className="px-10 py-8">
			<h1 className="mb-8 text-xl">All Restaurants</h1>
			<ul className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
				{restaurantsElement}
			</ul>
		</section>
	);
}
