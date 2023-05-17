import React, { useState, createContext, useContext } from "react";
import { bubbleSort } from "../utils/sorting/bubbleSort";
import { selectionSort } from "../utils/sorting/selectionSort";
import { insertionSort } from "../utils/sorting/insertionSort";
import { mergeSort } from "../utils/sorting/mergeSort";
import { quickSort } from "../utils/sorting/quickSort";
import { heapSort } from "../utils/sorting/heapSort";
import { useSpeed } from "./SpeedContext";
import { useArray } from "./ArrayContext";

const AlgorithmContext = createContext();

export const useAlgorithm = () => useContext(AlgorithmContext);

export const AlgorithmProvider = ({ children }) => {
	const [algorithm, setAlgorithm] = useState("bubbleSort");
	const [sorted, setSorted] = useState(false);
	const { speed, sleep, finishedAnimation } = useSpeed();
	const { array, setArray } = useArray();

	let currentArr = array;

	const handleSorting = (currentArr) => {
		switch (algorithm) {
			case "bubbleSort":
				bubbleSort(currentArr);
				break;
			case "selectionSort":
				selectionSort(currentArr);
				break;
			case "insertionSort":
				insertionSort(currentArr);
				break;
			case "mergeSort":
				mergeSort(currentArr);
				break;
			case "quickSort":
				quickSort(currentArr);
				break;
			case "heapSort":
				heapSort(currentArr);
				break;
			default:
				break;
		}
		setSorted(true);
		if (sorted) finishedAnimation();
	};

	return (
		<AlgorithmContext.Provider value={{ algorithm, setAlgorithm, handleSorting }}>
			{children}
		</AlgorithmContext.Provider>
	);
};
