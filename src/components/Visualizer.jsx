import React, { useState, useEffect } from "react";
import { useArray } from "../contexts/ArrayContext";
import "../styles/visualizer.css";

const Visualizer = () => {
	const { array, setArray, randomizeArray } = useArray();

	useEffect(() => {
		randomizeArray();
	}, []);

	return (
		<div className="sortingBars">
			{array &&
				array.map((val, key) => {
					return <div className="bars" id={key} key={key} style={{ height: val }}></div>;
				})}
		</div>
	);
};

export default Visualizer;
