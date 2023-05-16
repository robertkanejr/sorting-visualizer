import React from "react";
import "../styles/button.css";

const Button = ({ type, name }) => {
	return (
		<div>
			<button className={type}>{name}</button>
		</div>
	);
};

export default Button;
