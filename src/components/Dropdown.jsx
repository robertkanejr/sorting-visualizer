import React from "react";
import "../styles/dropdown.css";

const Dropdown = ({ onChange }) => {
	const algos = ["Bubble", "Selection", "Insertion", "Merge", "Quick", "Heap"];
	return (
		<div className="dropdown">
			<select onChange={onChange}>
				{algos.map((algo) => (
					<option value={algo}>{algo} Sort</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
