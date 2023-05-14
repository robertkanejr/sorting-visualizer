import React from "react";

const Dropdown = () => {
	const algos = ["Bubble", "Selection", "Insertion", "Merge", "Quick", "Heap"];
	return (
		<select name="" id="">
			{algos.map((algo) => (
				<option>{algo} Sort</option>
			))}
		</select>
	);
};

export default Dropdown;
