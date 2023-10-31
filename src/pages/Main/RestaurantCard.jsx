import React from "react";

import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

export default function RestaurantCard({ restaurant }) {
	const { name, photo, cuisine, price_level, is_closed } = restaurant;

	return (
		<li className="flex flex-col gap-2 w-full">
			<img
				src={photo.images.original.url}
				alt={photo.caption}
				className="h-40 object-cover"
			/>

			<h2 className="font-normal">{name}</h2>

			<div className="flex">
				<TbStarFilled />
				<TbStarFilled />
				<TbStarFilled />
				<TbStarFilled />
				<TbStarHalfFilled />
			</div>

			<ul className="text-xs flex justify-between ">
				<li className="text-gray-400">
					{cuisine[0].name} - {price_level}
				</li>
				<li className="text-gray-500">{is_closed ? "CLOSED" : "OPEN NOW"}</li>
			</ul>

			<button className="bg-blue-950 text-white text-sm py-2">
				LEARN MORE
			</button>
		</li>
	);
}
