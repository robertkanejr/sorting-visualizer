import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ArrayProvider } from "./contexts/ArrayContext";
import { SpeedProvider } from "./contexts/SpeedContext";
import { AlgorithmProvider } from "./contexts/AlgorithmContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ArrayProvider>
			<SpeedProvider>
				<AlgorithmProvider>
					<App />
				</AlgorithmProvider>
			</SpeedProvider>
		</ArrayProvider>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
