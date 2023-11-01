import React from "react";

import Rating from "../../../components/Rating";

import { Link } from "react-router-dom";
import RestaurantStatus from "../../../components/RestaurantStatus";

export default function RestaurantCard({ restaurant }) {
	const { id, img, name, categories, price_level, is_closed, rating } =
		restaurant;

	return (
		<li className="flex flex-col justify-around w-full gap-2 group h-80">
			<div className="w-full overflow-hidden h-1/2">
				<img
					src={img}
					alt={img}
					className="object-cover w-full h-full duration-200 group-hover:scale-125"
				/>
			</div>

			<h2 className="font-normal">{name}</h2>

			<div className="flex">
				<Rating rating={rating} />
			</div>

			<ul className="flex justify-between text-xs ">
				<li className="text-gray-400">
					{categories[0]} - {price_level}
				</li>
				<li>
					<RestaurantStatus is_closed={is_closed} />
				</li>
			</ul>

			<Link
				to={`/restaurants/${id}`}
				className="flex justify-center py-2 text-sm text-white duration-200 border bg-blue-950 border-blue-950 hover:bg-white hover:text-blue-950"
			>
				LEARN MORE
			</Link>
		</li>
	);
}
