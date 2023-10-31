import React, { useState } from "react";

import { TbCircle, TbCircleFilled } from "react-icons/tb";

export default function NavFilter() {
	// toggle filter open now
	const [toggleOpenNow, setToggleOpenNow] = useState(false);
	const [priceFilter, setPriceFilter] = useState("");
	const [categoriesFilter, setCategoriesFilter] = useState("");

	return (
		<nav className="relative border-y text-xs tracking-wide font-normal py-4 px-10 text-gray-500 gap-8 flex justify-between items-center">
			<div className="flex ">
				<h2>Filter By:</h2>
				<ul className="flex ml-4 text-black gap-8">
					<li
						onClick={() => setToggleOpenNow((prev) => !prev)}
						className="border-b  flex items-center gap-2"
					>
						<div className="relative flex items-center justify-center">
							<TbCircle className="text-xl text-gray-400" />
							{toggleOpenNow && (
								<TbCircleFilled className="text-xs absolute  text-blue-400" />
							)}
						</div>
						<button>Open Now</button>
					</li>

					<li className="border-b ">
						<select
							value={priceFilter}
							onChange={(e) => setPriceFilter(e.target.value)}
							className="w-16"
						>
							<option value="">Price</option>
							<option value="1000">1000</option>
							<option value="2000">2000</option>
						</select>
					</li>

					<li className="border-b ">
						<select
							value={categoriesFilter}
							onChange={(e) => setCategoriesFilter(e.target.value)}
							className="w-24"
						>
							<option value="">Categories</option>
							<option value="1000">1000</option>
							<option value="2000">2000</option>
						</select>
					</li>
				</ul>
			</div>

			<button className="border px-6 text-gray-400  py-1 absolute right-8">
				CLEAR ALL
			</button>
		</nav>
	);
}
