import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setArray, setArrayLength, resetArray } from "./arraySlice";
import "../../styles/array.css";

const Array = () => {
	// const [mainArray, setMainArray] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(resetArray());
	}, [dispatch]);

	const array = useSelector((state) => state.array);
	// const arrayLength = useSelector((state) => state.arrayLength);

	// const reset = () => {
	// 	setMainArray(array);
	// 	dispatch(resetArray(array, arrayLength));
	// };

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
