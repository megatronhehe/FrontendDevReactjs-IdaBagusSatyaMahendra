import React, { useState, useEffect } from "react";

const useResponsive = () => {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [isMobileMode, setIsMobileMode] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (windowWidth <= 640) {
			setIsMobileMode(true);
		} else {
			setIsMobileMode(false);
		}
	}, [windowWidth]);

	return { isMobileMode };
};

export { useResponsive };
