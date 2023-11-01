import React from "react";

import { TbAdjustmentsAlt } from "react-icons/tb";

export default function SmallNav({ setToggleFilterModal }) {
	return (
		<nav className="relative flex items-center justify-between gap-8 px-10 py-4 text-xs font-normal tracking-wide text-gray-500 border-y">
			<button
				onClick={() => setToggleFilterModal(true)}
				className="flex items-center gap-2"
			>
				<TbAdjustmentsAlt className="text-3xl" />
				<span className="text-base">Filter</span>
			</button>

			<button className="px-5 py-1 border">CLEAR ALL</button>
		</nav>
	);
}
