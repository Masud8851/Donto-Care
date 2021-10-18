import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import AboutUs from "./Pages/AboutUS/AboutUs";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route exact path="/home">
						<Home></Home>
					</Route>
					<Route exact path="/services">
						<Services></Services>
					</Route>
					<Route exact path="/about">
						<AboutUs></AboutUs>
					</Route>
					<Route exact path="/contact">
						<Contact></Contact>
					</Route>
					<Route exact path="/login">
						<Login></Login>
					</Route>
					<Route exact path="/register">
						<Register></Register>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
