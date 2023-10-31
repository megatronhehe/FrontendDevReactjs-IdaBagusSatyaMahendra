import React from "react";

import { TbStarFilled, TbStarHalfFilled, TbCircleFilled } from "react-icons/tb";

export default function RestaurantCard({ restaurant }) {
	const { name, photo, cuisine, price_level, is_closed } = restaurant;

	const restaurantStatus = (
		<li className="text-gray-500 flex items-center gap-1">
			<TbCircleFilled
				className={`${is_closed ? "text-red-400" : "text-green-400"}`}
			/>
			{is_closed ? "CLOSED" : "OPEN NOW"}
		</li>
	);

	return (
		<li className="flex flex-col justify-around gap-2 w-full group h-80">
			<div className="h-1/2 w-full overflow-hidden">
				<img
					src={photo.images.original.url}
					alt={photo.caption}
					className="h-full w-full object-cover group-hover:scale-125 duration-200"
				/>
			</div>

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
				{restaurantStatus}
			</ul>

			<button className="bg-blue-950 border border-blue-950 hover:bg-white text-white text-sm py-2 hover:text-blue-950 duration-200">
				LEARN MORE
			</button>
		</li>
	);
}
