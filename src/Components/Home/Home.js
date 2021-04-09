import React from "react";
import { Link } from "react-router-dom";
import picture from "./profilePic.png";
import "./Home.css";

const Home = () => {
	return (
		<div className="home">
			<div className="title">
				<span>
					<h2>Hey there,</h2>
					<h1>I am Shubham Kumar</h1>
					<h5>Frontend Software Engineer</h5>
				</span>
				<Link to="/about">
					<button>More about me</button>
				</Link>
			</div>
			<div className="person">
				<img src={picture} alt="person profile pic" />
			</div>
		</div>
	);
};

export default Home;
