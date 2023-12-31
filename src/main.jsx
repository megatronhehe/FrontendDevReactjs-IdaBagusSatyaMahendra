import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import RestaurantsContextProvider from "./context/RestaurantsContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<RestaurantsContextProvider>
				<App />
			</RestaurantsContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
