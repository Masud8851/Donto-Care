import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";
import AboutUs from "./Pages/AboutUS/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Router>
					<Switch>
						<Route exact path="/">
							<Home></Home>
						</Route>
						<Route path="/home">
							<Home></Home>
						</Route>
						<Route path="/services">
							<Services></Services>
						</Route>
						<Route path="/about">
							<AboutUs></AboutUs>
						</Route>
						<Route path="/contact">
							<Contact></Contact>
						</Route>
						<Route path="/appoitment">
							<Appointment></Appointment>
						</Route>
						<Route path="/login">
							<Login></Login>
						</Route>
						<Route path="/register">
							<Register></Register>
						</Route>
						<Route path="*">
							<NotFound></NotFound>
						</Route>
					</Switch>
				</Router>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
