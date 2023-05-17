import React from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Slider from "./Slider";
import { useArray } from "../contexts/ArrayContext";
import { useAlgorithm } from "../contexts/AlgorithmContext";
import { useSpeed } from "../contexts/SpeedContext";
import "../styles/header.css";

const Header = () => {
	const { array, randomizeArray } = useArray();
	const { setAlgorithm, handleSorting } = useAlgorithm();
	const { setSpeed } = useSpeed();
	return (
		<header>
			<Button type="newArray" name="New Array" onClick={randomizeArray} />
			<Dropdown onChange={(e) => setAlgorithm(e.target.value)} />
			<Slider onChange={(e) => setSpeed(e.target.value)} />
			<Button type="sort" name="Sort" onClick={() => handleSorting(array)} />
		</header>
	);
};

export default Header;
