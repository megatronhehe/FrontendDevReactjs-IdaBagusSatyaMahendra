import React, { useEffect, useState } from "react";

import { useParams, useNavigate } from "react-router-dom";

import MainContainer from "../../components/MainContainer";

import defaultimg from "../../assets/defaultimg.jpg";

import Rating from "../../components/Rating";

import {
	TbChevronLeft,
	TbMapPinFilled,
	TbStarFilled,
	TbWallet,
} from "react-icons/tb";

export default function RestaurantDetails() {
	const { id } = useParams();
	const nav = useNavigate();

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
		return (
			<MainContainer>
				<section className="flex items-center justify-center h-screen">
					Loading...
				</section>
			</MainContainer>
		);
	}

	// error
	if (error.length > 0) {
		return (
			<MainContainer>
				<section className="flex flex-col items-center justify-center h-screen gap-4">
					{error}
					<div className="flex gap-4">
						<button
							onClick={() => nav(-1)}
							className="px-4 py-1 text-sm text-blue-400 duration-200 bg-white border border-blue-400 "
						>
							Back
						</button>
						<button
							onClick={fetchRestaurant}
							className="px-4 py-1 text-sm text-white duration-200 bg-blue-400 border border-blue-400 hover:text-blue-400 hover:bg-white"
						>
							Retry
						</button>
					</div>
				</section>
			</MainContainer>
		);
	}

	// normal
	const {
		name,
		is_closed,
		rating,
		description,
		location,
		categories,
		price_level,
	} = thisRestaurant;

	console.log(thisRestaurant);

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
					{name}{" "}
					<span className="text-sm">{is_closed ? "CLOSED" : "OPEN NOW"}</span>
				</h1>

				<div className="flex items-center gap-2">
					<Rating rating={rating} />
					<span>{rating}</span>
				</div>

				<ul className="flex gap-2 text-sm text-gray-400">
					<h2 className="pr-2 border-r">Cuisine</h2>
					{categories.map((category) => (
						<li>{category}</li>
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
							<h3 className="font-bold">{rating}</h3>
						</li>

						<li className="flex flex-col items-center justify-between w-full p-2 text-white bg-blue-400 rounded-lg h-28">
							<h3 className="text-sm font-normal tracking-wide">Price</h3>
							<TbWallet className="text-3xl" />
							<h3>{price_level}</h3>
						</li>
					</ul>

					<div className="pl-2 mb-6 border-l sm:w-1/3">
						<h2 className="font-normal">Description</h2>
						<p className="mt-2 text-sm">{description}</p>
					</div>
				</div>
			</section>
		</MainContainer>
	);
}
