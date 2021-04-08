import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<React.Fragment>
			<div className="app">
				<Switch>
					<Route exact path="/" component={Home} />
				</Switch>
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default App;
