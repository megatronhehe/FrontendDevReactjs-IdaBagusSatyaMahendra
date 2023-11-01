import React from "react";

import { useNavigate } from "react-router-dom";

import MainContainer from "../../components/MainContainer";

import RestaurantStatus from "../../components/RestaurantStatus";

import Rating from "../../components/Rating";

import {
	TbChevronLeft,
	TbMapPinFilled,
	TbStarFilled,
	TbWallet,
} from "react-icons/tb";

export default function DetailsSection({ thisRestaurant }) {
	const nav = useNavigate();

	const {
		name,
		is_closed,
		rating,
		description,
		location,
		categories,
		price_level,
		address,
	} = thisRestaurant;
	return (
		<MainContainer>
			<section className="px-10 py-6">
				<button
					onClick={() => nav(-1)}
					className="flex items-center justify-center w-8 h-8 text-gray-400 border rounded-full"
				>
					<TbChevronLeft />
				</button>
			</section>

			<section className="flex flex-col gap-4 px-10">
				<div className="w-full bg-gray-100 h-80"></div>
				<h1 className="flex items-center justify-between mt-4 text-2xl">
					{name} <RestaurantStatus is_closed={is_closed} />
				</h1>

				<h2>
					{location}, {address}
				</h2>

				<div className="flex items-center gap-2">
					<Rating rating={rating} />
					<span className="text-xs">{rating}</span>
				</div>

				<ul className="flex items-center gap-2 text-sm text-gray-400">
					<h2 className="pr-2 border-r">Cuisine</h2>
					{categories.map((category, i) => (
						<li key={i} className="px-3 py-0.5 border rounded-full">
							{category}
						</li>
					))}
				</ul>

				<div className="flex flex-col justify-center gap-4 sm:flex-row">
					<ul className="grid grid-cols-3 gap-3 sm:w-2/3">
						<li className="flex flex-col items-center justify-between w-full p-2 text-white bg-green-400 rounded-lg h-28">
							<h3 className="text-sm font-normal tracking-wide">Location</h3>
							<TbMapPinFilled className="text-3xl" />
							<span className="font-normal">{location}</span>
						</li>

						<li className="flex flex-col items-center justify-between w-full p-2 text-white bg-yellow-400 rounded-lg h-28">
							<h3 className="text-sm font-normal tracking-wide">Rating</h3>
							<TbStarFilled className="text-3xl" />
							<h3 className="font-bold">{rating}/5</h3>
						</li>

						<li className="flex flex-col items-center justify-between w-full p-2 text-white bg-blue-400 rounded-lg h-28">
							<h3 className="text-sm font-normal tracking-wide">Price</h3>
							<TbWallet className="text-3xl" />
							<h3>{price_level}</h3>
						</li>
					</ul>

					<div className="pl-4 mb-6 border-l sm:w-1/3">
						<h2 className="font-normal">Description</h2>
						<p className="mt-2 text-sm">{description}</p>
					</div>
				</div>
			</section>
		</MainContainer>
	);
}
