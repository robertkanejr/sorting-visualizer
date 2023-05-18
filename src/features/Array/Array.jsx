import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { randomizeArray } from "./arraySlice";
import "../../styles/array.css";

const Array = () => {
	useEffect(() => {
		randomizeArray();
	}, []);

	const array = useSelector((state) => state.array.randomArr);

	return (
		<div className="sortingBars">
			{array &&
				array.map((val, key) => {
					return <div className="bars" id={key} key={key} style={{ height: val }}></div>;
				})}
		</div>
	);
};

export default Array;
