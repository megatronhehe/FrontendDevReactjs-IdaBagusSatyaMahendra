import React from "react";

export default function MainContainer({ children }) {
	return (
		<main className="flex justify-center font-extralight">
			<div className="max-w-5xl  w-full">{children}</div>
		</main>
	);
}
