import React from "react";
import { TbStarFilled, TbStarHalfFilled, TbStar } from "react-icons/tb";

export default function Rating({ rating }) {
	const ratingArray = [1, 2, 3, 4, 5];
	const decimal = rating - Math.floor(rating);

	return (
		<div className="flex">
			<div className="flex">
				{ratingArray.map((rate) => {
					if (decimal >= 0.5) {
						if (rate <= Math.floor(rating)) {
							return <TbStarFilled key={rate} />;
						} else if (rate === Math.floor(rating) + 1) {
							return <TbStarHalfFilled key={rate} />;
						} else {
							return <TbStar key={rate} />;
						}
					} else {
						if (rate <= Math.floor(rating)) {
							return <TbStarFilled key={rate} />;
						} else {
							return <TbStar key={rate} />;
						}
					}
				})}
			</div>
		</div>
	);
}
