import React from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Slider from "./Slider";
import { useArray } from "../contexts/ArrayContext";
import { useAlgorithm } from "../contexts/AlgorithmContext";
import "../styles/header.css";

const Header = () => {
	const { array, randomizeArray } = useArray();
	const { setAlgorithm, handleSort } = useAlgorithm();
	return (
		<header>
			<Button type="newArray" name="New Array" onClick={randomizeArray} />
			<Dropdown onChange={(e) => setAlgorithm(e.target.value)} />
			<Slider />
			<Button type="sort" name="Sort" onClick={() => handleSort(array)} />
		</header>
	);
};

export default Header;
