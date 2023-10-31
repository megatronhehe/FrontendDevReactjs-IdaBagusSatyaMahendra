import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import RestaurantsContextProvider from "./context/RestaurantsContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RestaurantsContextProvider>
			<App />
		</RestaurantsContextProvider>
	</React.StrictMode>
);
