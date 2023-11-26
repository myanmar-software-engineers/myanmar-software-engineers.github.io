import React from "react";

import Skills from "./components/Skills";
import Intro from "./components/Intro";
import Profile from "./components/Profile";
import Projects from "./components/Projects";

const YeHtetAung = () => {
	return (
		<div className="md:flex">
			<Profile />
			<div className="container">
				<Intro />
				<Skills />
				<Projects />
			</div>
		</div>
	);
};

export default YeHtetAung;
