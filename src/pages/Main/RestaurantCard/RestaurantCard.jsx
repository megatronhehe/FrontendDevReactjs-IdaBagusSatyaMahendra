import React from "react";

import { TbCircleFilled, TbPhotoFilled } from "react-icons/tb";

import Rating from "./Rating";

export default function RestaurantCard({ restaurant }) {
	const { name, categories, price_level, is_closed, rating } = restaurant;

	const restaurantStatus = (
		<li className="flex items-center gap-1 text-gray-500">
			<TbCircleFilled
				className={`${is_closed ? "text-red-400" : "text-green-400"}`}
			/>
			{is_closed ? "CLOSED" : "OPEN NOW"}
		</li>
	);

	return (
		<li className="flex flex-col justify-around w-full gap-2 group h-80">
			{/* <div className="w-full overflow-hidden h-1/2">
				<img
					src={photo.images.original.url}
					alt={photo.caption}
					className="object-cover w-full h-full duration-200 group-hover:scale-125"
				/>
			</div> */}

			<div className="flex items-center justify-center w-full overflow-hidden bg-gray-200 h-1/2">
				<TbPhotoFilled className="text-4xl text-white duration-200 group-hover:scale-125" />
			</div>

			<h2 className="font-normal">{name}</h2>

			<div className="flex">
				<Rating rating={rating} />
			</div>

			<ul className="flex justify-between text-xs ">
				<li className="text-gray-400">
					{categories[0]} - {price_level}
				</li>
				{restaurantStatus}
			</ul>

			<button className="py-2 text-sm text-white duration-200 border bg-blue-950 border-blue-950 hover:bg-white hover:text-blue-950">
				LEARN MORE
			</button>
		</li>
	);
}
