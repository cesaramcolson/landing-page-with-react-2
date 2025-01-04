import React from "react";
import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import Footer from "./Footer";
import Card from "./Card";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
			<Card/>
			<Footer/>
		</div>
	);
};

export default Home;
