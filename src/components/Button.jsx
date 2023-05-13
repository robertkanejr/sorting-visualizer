import React from "react";

const Button = ({ type, name }) => {
	return <button className={type}>{name}</button>;
};

export default Button;
