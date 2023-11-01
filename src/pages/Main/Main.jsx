import React from "react";

import MainContainer from "../../components/MainContainer";
import NavFilter from "./NavFilter/NavFilter";
import RestaurantList from "./RestaurantList";

export default function Main() {
	return (
		<MainContainer>
			<section className="px-10 my-6">
				<h1 className="text-4xl">Restaurants</h1>
				<p className="max-w-sm mt-6 text-gray-500">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</section>

			<NavFilter />

			<RestaurantList />
		</MainContainer>
	);
}
