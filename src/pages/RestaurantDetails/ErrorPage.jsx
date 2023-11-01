import React from "react";

import { useNavigate } from "react-router-dom";

export default function ErrorPage({ error, fetchRestaurant }) {
	const nav = useNavigate();

	return (
		<MainContainer>
			<section className="flex flex-col items-center justify-center h-screen gap-4">
				{error}
				<div className="flex gap-4">
					<button
						onClick={() => nav(-1)}
						className="px-4 py-1 text-sm text-blue-400 duration-200 bg-white border border-blue-400 "
					>
						Back
					</button>
					<button
						onClick={fetchRestaurant}
						className="px-4 py-1 text-sm text-white duration-200 bg-blue-400 border border-blue-400 hover:text-blue-400 hover:bg-white"
					>
						Retry
					</button>
				</div>
			</section>
		</MainContainer>
	);
}
