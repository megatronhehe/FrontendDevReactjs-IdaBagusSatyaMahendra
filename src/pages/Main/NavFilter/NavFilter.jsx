import React from "react";

import { useResponsive } from "../../../hooks/useResponsive";
import SmallNav from "./SmallNav";
import BigNav from "./BigNav";

export default function NavFilter() {
	// custom hooks for responsive design
	const { isMobileMode } = useResponsive();

	return isMobileMode ? <SmallNav /> : <BigNav />;
}
