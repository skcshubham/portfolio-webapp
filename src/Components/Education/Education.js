import React from "react";
import "./Education.css";

const About = () => {
	return (
		<div className="education-container">
			<div className="education-section">
				<h1>Undergraduate | 2018-present </h1>
				<h3>SRM Institute Of Science and Technology, Chennai | 9.82 CGPA</h3>
				<h5>B.Tech | Computer Science Engineering</h5>
				<ul>
					<li>
						member of Agrim Lab: A technical lab consisting of top 30 students
						of CS branch
					</li>
					<li>
						took a 2-day C++ language workshop for high school students of local
						government school.
					</li>
					<li>
						volunteered with NSS club for spreading awareness against climate
						change, afforestation and elections.
					</li>
				</ul>
			</div>
			<div className="education-section">
				<h1>Intermediate | 2016-2018 </h1>
				<h3>SKP Vidya Vihar, Mandroza | 74.60 %</h3>
				<h5>12th | CBSE | Physics, Chemistry, Maths</h5>
				<ul>
					<li>member of English Literature Society.</li>
					<li>
						wrote various articles and brochures for the school's annual
						yearbook.
					</li>
				</ul>
			</div>
			<div className="education-section">
				<h1>Matriculation | 2004-2016 </h1>
				<h3>ST. Teresa's School, Bhagalpur | 94.40 %</h3>
				<h5>10th | ICSE | Science with Computer Applications</h5>
				<ul>
					<li>
						secured 57th national rank in English Olympiad conducted by EduHeal
						Foundation.
					</li>
					<li>
						volunteered to organize the Silver Jubilee Fest (25th anniversary)
						of the school.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
