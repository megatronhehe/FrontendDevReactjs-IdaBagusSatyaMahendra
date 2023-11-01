import React, { useContext } from "react";

import { TbChevronLeft } from "react-icons/tb";

import { TbCircle, TbCircleFilled, TbTrashX } from "react-icons/tb";

import RestaurantsContext from "../../../context/RestaurantsContext";

export default function FilterModal({ setToggleFilterModal }) {
	const {
		isOpenNowFilter,
		setIsOpenNowFilter,
		setPriceFilter,
		priceFilter,
		categoriesFilter,
		setCategoriesFilter,
		clearFilter,
		categoriesArray,
	} = useContext(RestaurantsContext);

	return (
		<section
			onClick={() => setToggleFilterModal(false)}
			className="fixed top-0 left-0 flex flex-col items-center w-full h-full p-6 bg-black backdrop-filter backdrop-blur-sm bg-opacity-10"
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="w-full p-6 mt-6 bg-white rounded-xl"
			>
				<div className="flex items-center justify-between pb-6 border-b">
					<button
						onClick={() => setToggleFilterModal(false)}
						className="flex items-center gap-2 text-gray-400"
					>
						<TbChevronLeft /> <span className="text-sm ">back</span>
					</button>
					<h1 className="text-xl ">Filter </h1>
					<button onClick={clearFilter} className="text-2xl text-gray-400 ">
						<TbTrashX />
					</button>
				</div>

				<ul className="flex justify-between mt-6 text-sm">
					<li>
						<button
							onClick={() => setIsOpenNowFilter((prev) => !prev)}
							className="flex items-center gap-2"
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

					<li>
						<select
							id="priceFilter"
							name="priceFilter"
							value={priceFilter}
							onChange={(e) => setPriceFilter(e.target.value)}
							className=""
						>
							<option value="">Price</option>
							<option value="$">$</option>
							<option value="$$">$$</option>
							<option value="$$$">$$$</option>
							<option value="$$$$">$$$$</option>
							<option value="$$$$$">$$$$$</option>
						</select>
					</li>

					<li>
						<select
							id="categoriesFilter"
							name="categoriesFilter"
							value={categoriesFilter}
							onChange={(e) => setCategoriesFilter(e.target.value)}
							className=""
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
		</section>
	);
}
