import React from "react";

const algos = ["Bubble", "Selection", "Insertion", "Merge", "Quick", "Heap"];

const Dropdown = () => {
	return (
		<select name="" id="">
			{algos.map((algo) => (
				<option>{algo} Sort</option>
			))}
		</select>
	);
};

export default Dropdown;
