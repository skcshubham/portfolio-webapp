import React from "react";
import "./Experience.css";

const Experience = () => {
	return (
		<div className="experience-container">
			<div className="experience-section">
				<h2>OpenGenus Foundation | Jul to Sep '20</h2>
				<h3>Data Structures and Algorithms Intern</h3>
				<ul>
					<li>
						wrote the implementation of linked list and algorithms in C++.
					</li>
					<li>
						wrote technical articles on a wide range of topics from Data
						Structures and Algorithms to Web Development.
					</li>
					<li>
						<a
							href="https://iq.opengenus.org/author/skcshubham"
							target="_blank"
							rel="noreferrer"
						>
							Link to my articles
						</a>
					</li>
				</ul>
			</div>
			<div className="experience-section">
				<h2>Agrim Lab, Tech Club | Oct '19 to present</h2>
				<h3>Student Associate</h3>
				<ul>
					<li>
						student-run technical club from SRM, Ramapuram campus which takes in
						top 30 students of CSE branch based on CGPA and programming
						aptitude.
					</li>
					<li>
						co-created a 15hr+ video tutorial on C++ for high school and diploma
						students. I made a video tutorial on Dynamic Memory Allocation and
						Pointers.
					</li>
				</ul>
			</div>
			<div className="experience-section">
				<h2>National Service Scheme (NSS) | Jun '18 to present</h2>
				<h3>Student Volunteer</h3>
				<ul>
					<li>
						I organised campaigns to spread awareness about climate change,
						afforestation and importance of voting and state elections.
					</li>
					<li>
						I managed NSS camp to organise event to plant seedlings. along with
						a team of 10+ people.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
