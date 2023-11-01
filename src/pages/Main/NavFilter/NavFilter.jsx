import React, { useState } from "react";

import { useResponsive } from "../../../hooks/useResponsive";
import SmallNav from "./SmallNav";
import BigNav from "./BigNav";

import FilterModal from "./FilterModal";

export default function NavFilter() {
	// custom hooks for responsive design
	const { isMobileMode } = useResponsive();

	const [toggleFilterModal, setToggleFilterModal] = useState(false);

	return (
		<>
			{isMobileMode ? (
				<SmallNav setToggleFilterModal={setToggleFilterModal} />
			) : (
				<BigNav />
			)}

			{isMobileMode && toggleFilterModal && (
				<FilterModal setToggleFilterModal={setToggleFilterModal} />
			)}
		</>
	);
}
