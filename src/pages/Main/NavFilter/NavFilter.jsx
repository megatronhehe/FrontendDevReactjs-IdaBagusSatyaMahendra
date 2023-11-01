import React, { useState } from "react";

import { TbCircle, TbCircleFilled } from "react-icons/tb";

import { useResponsive } from "../../../hooks/useResponsive";
import SmallNav from "./SmallNav";
import BigNav from "./BigNav";

export default function NavFilter() {
	// custom hooks for responsive design
	const { isMobileMode } = useResponsive();

	// toggle filter open now
	const [toggleOpenNow, setToggleOpenNow] = useState(false);
	const [priceFilter, setPriceFilter] = useState("");
	const [categoriesFilter, setCategoriesFilter] = useState("");

	return isMobileMode ? <SmallNav /> : <BigNav />;
}
