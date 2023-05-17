import React, { useState, createContext, useContext } from "react";
import { useArray } from "./ArrayContext";

const SpeedContext = createContext();

export const useSpeed = () => useContext(SpeedContext);

export const SpeedProvider = ({ children }) => {
	const [speed, setSpeed] = useState(50);
	const { array } = useArray();

	const finishedAnimation = async () => {
		for (let i = 0; i < array.length; i++) {
			let bar = document.getElementById(i).style;
			bar.backgroundColor = "green";
			await sleep(speed);
		}
	};

	const sleep = (milliSeconds) => new Promise((resolve) => setTimeout(resolve, milliSeconds));

	return (
		<SpeedContext.Provider value={{ speed, setSpeed, finishedAnimation, sleep }}>
			{children}
		</SpeedContext.Provider>
	);
};
