import React from "react";
import "../styles/button.css";

const Button = ({ type, name, onClick }) => {
	return (
		<div>
			<button className={type} onClick={onClick}>
				{name}
			</button>
		</div>
	);
};

export default Button;
