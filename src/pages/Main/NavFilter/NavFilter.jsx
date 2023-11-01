import React, { useContext, useState } from "react";

import { useResponsive } from "../../../hooks/useResponsive";
import SmallNav from "./SmallNav";
import BigNav from "./BigNav";

import RestaurantsContext from "../../../context/RestaurantsContext";

export default function NavFilter() {
	// custom hooks for responsive design
	const { isMobileMode } = useResponsive();

	// toggle filter open now
	const { setIsOpenNowFilter, isOpenNowFilter } =
		useContext(RestaurantsContext);

	const [priceFilter, setPriceFilter] = useState("");
	const [categoriesFilter, setCategoriesFilter] = useState("");

	return isMobileMode ? (
		<SmallNav />
	) : (
		<BigNav
			setIsOpenNowFilter={setIsOpenNowFilter}
			isOpenNowFilter={isOpenNowFilter}
			setPriceFilter={setPriceFilter}
			priceFilter={priceFilter}
			setCategoriesFilter={setCategoriesFilter}
			categoriesFilter={categoriesFilter}
		/>
	);
}
