import React from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Slider from "./Slider";
import "../styles/header.css";

const Header = () => {
	return (
		<header>
			<Button type="newArray" name="New Array" />
			<Dropdown />
			<Slider />
			<Button type="sort" name="Sort" />
		</header>
	);
};

export default Header;
