import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../image/logo/logo.png";
import useFirebase from "../../Hooks/useFirebase";
import "./Navbar.css";

const Navbar = () => {
	const { user } = useFirebase();
	return (
		<div>
			<div>
				<div className="container">
					<nav className="navbar navbar-expand-lg navbar-light nav-bar">
						<div className="container-fluid align-items-center">
							<img src={logo} alt="" />
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span className="navbar-toggler-icon"></span>
							</button>
							<div
								className="collapse navbar-collapse"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav mx-auto ">
									<li className="nav-item">
										<NavLink
											className="nav-link"
											aria-current="page"
											to="/home"
											activeStyle={{
												fontWeight: "bold",
												color: "blue",
											}}
										>
											Home
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className="nav-link"
											to="/services"
											activeStyle={{
												fontWeight: "bold",
												color: "blue",
											}}
										>
											Services
										</NavLink>
									</li>
									<li className="nav-item ">
										<NavLink
											className="nav-link "
											to="/about"
											activeStyle={{
												fontWeight: "bold",
												color: "blue",
											}}
										>
											About us
										</NavLink>
									</li>
									<li className="nav-item">
										<NavLink
											className="nav-link "
											to="/contact"
											activeStyle={{
												fontWeight: "bold",
												color: "blue",
											}}
										>
											Contact
										</NavLink>
									</li>
								</ul>
								<div className="d-flex align-items-center justify-content-center">
									<p></p>
									{user.email ? (
										<NavLink to="/" className="btn btn-primary m-2">
											Sign up
										</NavLink>
									) : (
										<NavLink to="/login" className="btn btn-primary m-2">
											Sign in
										</NavLink>
									)}
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
