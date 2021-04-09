import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Education from "./Components/Education/Education";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";

function App() {
	return (
		<React.Fragment>
			<div className="app">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/education" component={Education} />
					<Route exact path="/about" component={About} />
					<Route exact path="/projects" component={Projects} />
					<Route exact path="/experience" component={Experience} />
				</Switch>
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default App;
