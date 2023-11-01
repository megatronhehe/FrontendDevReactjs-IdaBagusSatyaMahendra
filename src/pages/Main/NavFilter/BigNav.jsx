import React, { useContext, useState } from "react";

import RestaurantsContext from "../../../context/RestaurantsContext";

import { TbCircle, TbCircleFilled } from "react-icons/tb";
import ClearFilterButton from "./ClearFilterButton";

export default function BigNav() {
	const {
		priceFilter,
		setPriceFilter,
		isOpenNowFilter,
		setIsOpenNowFilter,
		categoriesFilter,
		setCategoriesFilter,
		categoriesArray,
	} = useContext(RestaurantsContext);

	return (
		<nav className="relative flex items-center justify-between gap-8 px-10 py-4 text-xs font-normal tracking-wide text-gray-500 border-y">
			<div className="flex ">
				<h2>Filter By:</h2>
				<ul className="flex gap-8 ml-4 text-black">
					<li>
						<button
							onClick={() => setIsOpenNowFilter((prev) => !prev)}
							className="flex items-center gap-2 border-b"
						>
							<div className="relative flex items-center justify-center">
								<TbCircle className="text-xl text-gray-400" />
								{isOpenNowFilter && (
									<TbCircleFilled className="absolute text-xs text-blue-400" />
								)}
							</div>
							<span>Open Now</span>
						</button>
					</li>

					<li className="border-b ">
						<select
							id="priceFilter"
							name="priceFilter"
							value={priceFilter}
							onChange={(e) => setPriceFilter(e.target.value)}
							className="w-16"
						>
							<option value="">Price</option>
							<option value="$">$</option>
							<option value="$$">$$</option>
							<option value="$$$">$$$</option>
							<option value="$$$$">$$$$</option>
							<option value="$$$$$">$$$$$</option>
						</select>
					</li>

					<li className="border-b ">
						<select
							id="categoriesFilter"
							name="categoriesFilter"
							value={categoriesFilter}
							onChange={(e) => setCategoriesFilter(e.target.value)}
							className="w-24"
						>
							<option value="">Categories</option>
							{categoriesArray.map((category) => (
								<option key={category} value={category}>
									{category}
								</option>
							))}
						</select>
					</li>
				</ul>
			</div>

			<div className="absolute right-8">
				<ClearFilterButton />
			</div>
		</nav>
	);
}
