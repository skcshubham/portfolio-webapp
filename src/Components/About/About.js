import React from "react";
import "./About.css";
import cpp from "./C++.png";

const About = () => {
	return (
		<div className="skills about">
			<div className="content">
				<div className="section">
					<h2 className="section-header">Summary</h2>
					<p>
						I am an undergraduate student with an innate love for
						problem-solving with algorithms and a passion for frontend
						development. I'm a B.Tech Pre-Final year Computer Science student
						from SRM IST, Chennai with strong core computer science knowledge of
						Operating Systems, Database Management System, SQL and Data
						Structures and Algorithms.
					</p>
				</div>
			</div>
			<div className="section">
				<h2 className="section-header">Skills</h2>
				<img src={cpp} alt="C++ logo" style={{ width: "68px" }} />
				<i className="fab fa-html5 fa-5x"></i>
				<i className="fab fa-css3 fa-5x"></i>
				<i className="fab fa-node-js fa-5x"></i>
				<i className="fab fa-react fa-5x"></i>
				<i className="fas fa-database fa-5x"></i>
				<i className="fas fa-terminal fa-4x"></i>
			</div>
			<div className="section">
				<h2 className="section-header">Achievements</h2>
				<ul>
					<li>
						14th rank among 2200+ students on Geeksforgeeks coding section in
						the entire university.{" "}
						<a
							href="https://auth.geeksforgeeks.org/user/skcshubham/practice/"
							style={{ color: "blue" }}
							target="_blank"
							rel="noreferrer"
						>
							Link to profile
						</a>
					</li>
					<li>
						Solved over 200+ questions on Data Structures and Algorithms on
						Leetcode.{" "}
						<a
							href="https://leetcode.com/skcshubham/"
							style={{ color: "blue" }}
							target="_blank"
							rel="noreferrer"
						>
							Link to profile
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
