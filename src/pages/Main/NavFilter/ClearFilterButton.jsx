import React, { useContext } from "react";

import RestaurantsContext from "../../../context/RestaurantsContext";

export default function ClearFilterButton() {
	const { clearFilter } = useContext(RestaurantsContext);

	return (
		<button onClick={clearFilter} className="px-5 py-1 border">
			CLEAR ALL
		</button>
	);
}
