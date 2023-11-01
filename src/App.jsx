import React from "react";
import Main from "./pages/Main/Main";

import { Routes, Route } from "react-router-dom";
import RestaurantDetails from "./pages/RestaurantDetails/RestaurantDetails";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/restaurants/:id" element={<RestaurantDetails />} />
		</Routes>
	);
}

export default App;
