import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Services from "./Pages/Services/Services";
import Contact from "./Pages/Contact/Contact";
import AboutUs from "./Pages/AboutUS/AboutUs";
import Appointment from "./Pages/Appointment/Appointment";
import Navbar from "./Pages/NavBar/Navbar";
import Footer from "./Pages/Footer/Footer";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
	return (
		<div className="App">
			<Router>
				{/* <Navbar /> */}
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
				{/* <Footer /> */}
			</Router>
		</div>
	);
}

export default App;
