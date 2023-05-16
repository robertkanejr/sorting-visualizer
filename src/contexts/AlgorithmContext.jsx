import React, { useState, createContext, useContext } from "react";
import { bubbleSort } from "../utils/sorting/bubbleSort";
import { selectionSort } from "../utils/sorting/selectionSort";
import { insertionSort } from "../utils/sorting/insertionSort";
import { mergeSort } from "../utils/sorting/mergeSort";
import { quickSort } from "../utils/sorting/quickSort";
import { heapSort } from "../utils/sorting/heapSort";

const AlgorithmContext = createContext();

export const useAlgorithm = () => useContext(AlgorithmContext);

export const AlgorithmProvider = ({ children }) => {
	const [algorithm, setAlgorithm] = useState("bubbleSort");

	const handleSorting = (arr) => {
		switch (algorithm) {
			case "bubbleSort":
				bubbleSort(arr);
				break;
			case "selectionSort":
				selectionSort(arr);
				break;
			case "insertionSort":
				insertionSort(arr);
				break;
			case "mergeSort":
				mergeSort(arr);
				break;
			case "quickSort":
				quickSort(arr);
				break;
			case "heapSort":
				heapSort(arr);
				break;
			default:
				break;
		}
	};

	return (
		<AlgorithmContext.Provider value={{ algorithm, setAlgorithm, handleSorting }}>
			{children}
		</AlgorithmContext.Provider>
	);
};
