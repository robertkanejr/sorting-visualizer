import React, { useState, createContext, useContext } from "react";

const ArrayContext = createContext();

export const useArray = () => useContext(ArrayContext);

export const ArrayProvider = ({ children }) => {
	const [array, setArray] = useState([]);

	const arraySize = 100;

	const randomizeArray = () => {
		for (let i = 0; i < array.length; i++) {
			let bar = document.getElementById(i).style;
			bar.backgroundColor = "#ff7f50";
		}
		let arr = [];
		for (let i = 0; i < arraySize; i++) arr.push(randomVals(20, 400));
		setArray(arr);
	};

	const randomVals = (min, max) => {
		let randomVal = Math.floor(Math.random() * (max - min + 1) + min);
		return randomVal;
	};

	return (
		<ArrayContext.Provider value={{ array, setArray, randomizeArray }}>
			{children}
		</ArrayContext.Provider>
	);
};
