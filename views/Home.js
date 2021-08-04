import React, { useState } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Calendar from "react-calendar";

export const Home = () => {
	return (
		<div className="text-center mt-5">
			<Calendar />
		</div>
	);
};
