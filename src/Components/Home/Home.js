import React from "react";
import { Link } from "react-router-dom";
import picture from "./profilePic.png";
import "./Home.css";

const Home = () => {
	return (
		<div className="home">
			<div className="title">
				<h1>
					<h5>Hey there,</h5>
					<h3>I am Shubham Kumar</h3>
					<h6>Frontend Engineer</h6>
				</h1>
				<Link to="about">
					<button>More Info about me</button>
				</Link>
			</div>
			<div className="person">
				<img src={picture} alt="person profile pic" />
			</div>
		</div>
	);
};

export default Home;
