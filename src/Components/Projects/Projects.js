import React from "react";
import "./Projects.css";
import githubSearch from "./Github-search.png";
import ecomm from "./E-comm.png";
import writeCode from "./write-code.png";

const Projects = () => {
	return (
		<div>
			<div class="container">
				<main class="grid">
					<article className="card">
						<img src={githubSearch} alt="" />
						<div class="text">
							<h2>Github Search</h2>
							<p className="project-description">
								A web app that lets users search their Github profile and check
								their entire profile data as well as their top 5 recent
								repositories and its details. Built with{" "}
								<strong>React, </strong>
								<strong>Hooks</strong> and <strong>React router</strong>.
							</p>
							<a
								href="https://github-search-reactjs.netlify.app/"
								target="_blank"
								rel="noreferrer"
								style={{ color: "blue", textDecoration: "none" }}
							>
								Live link
							</a>
							<a
								href="https://github.com/skcshubham/Github-Search"
								target="_blank"
								rel="noreferrer"
								style={{
									color: "blue",
									textDecoration: "none",
									marginLeft: "20px",
								}}
							>
								Code Repository
							</a>
						</div>
					</article>
					<article className="card">
						<img src={ecomm} alt="" />
						<div class="text">
							<h2>E-commerce Cart</h2>
							<p className="project-description">
								An e-commerce web app built with <strong>React, </strong>{" "}
								<strong>Hooks </strong>
								and <strong>Commerce.js API</strong>. It also has a demo payment
								feature that uses the <strong>Google Pay integration</strong>{" "}
								for React.
							</p>
							<a
								href="https://e-commerce-webapp.netlify.app/"
								target="_blank"
								rel="noreferrer"
								style={{ color: "blue", textDecoration: "none" }}
							>
								Live link
							</a>
							<a
								href="https://github.com/skcshubham/E-commerce-webapp"
								target="_blank"
								rel="noreferrer"
								style={{
									color: "blue",
									textDecoration: "none",
									marginLeft: "20px",
								}}
							>
								Code Repository
							</a>
						</div>
					</article>
					<article className="card">
						<img src={writeCode} alt="" />
						<div class="text" style={{ marginTop: "13px" }}>
							<h2>Write Code</h2>
							<p className="project-description">
								An online code editor built with <strong>React</strong>,{" "}
								<strong>Hooks</strong>, and <strong>Codemirror library</strong>{" "}
								that lets you code HTML, CSS, and JS online. I have also used{" "}
								<strong>LocalStorage API</strong> to persist code written in the
								editor locally.
							</p>
							<a
								href="https://write-code.netlify.app/"
								target="_blank"
								rel="noreferrer"
								style={{ color: "blue", textDecoration: "none" }}
							>
								Live link
							</a>
							<a
								href="https://github.com/skcshubham/Write-Code"
								target="_blank"
								rel="noreferrer"
								style={{
									color: "blue",
									textDecoration: "none",
									marginLeft: "20px",
								}}
							>
								Code Repository
							</a>
						</div>
					</article>
				</main>
			</div>
		</div>
	);
};

export default Projects;
