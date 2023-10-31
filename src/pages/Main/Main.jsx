import React from "react";

import MainContainer from "../../components/MainContainer";
import NavFilter from "./NavFilter";
import RestaurantList from "./RestaurantList";

export default function Main() {
	return (
		<MainContainer>
			<section className="px-10 my-6">
				<h1 className="text-4xl">Restaurants</h1>
				<p className="max-w-sm text-gray-500 mt-6">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. deleniti
					suscipit facilis eaque, nobis dignissimos.
				</p>
			</section>

			<NavFilter />

			<RestaurantList />
		</MainContainer>
	);
}
