import React from "react";

import { TbCircleFilled } from "react-icons/tb";

export default function RestaurantStatus({ is_closed }) {
	return (
		<div className="flex items-center gap-1 text-xs text-gray-500">
			<TbCircleFilled
				className={`${is_closed ? "text-red-400" : "text-green-400"}`}
			/>
			{is_closed ? "CLOSED" : "OPEN NOW"}
		</div>
	);
}
