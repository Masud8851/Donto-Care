import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUS/AboutUs";
import Contact from "./Pages/Contact/Contact";
import Appointment from "./Pages/Appointment/Appointment";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import Services from "./Pages/Services/Services";
import AuthProvider from "./Context/AuthProvide";
import Service from "./Pages/Service/Service";

function App() {
	return (
		<div className="App">
			<AuthProvider>
				<Router>
					{/* <Header /> */}
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
						<Route path="/services/:id">
							<Service></Service>
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
			</AuthProvider>
		</div>
	);
}

export default App;
