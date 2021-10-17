import React from "react";
import logo from "../../image/logo/logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import useFirebase from "../../Hooks/useFirebase";

const Navbar = () => {
	const { user } = useFirebase();
	return (
		<div>
			<div className="">
				<div className="container nav-bar">
					<nav class="navbar navbar-expand-lg navbar-light">
						<div class="container-fluid ">
							<img src={logo} alt="" />
							<button
								class="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								<span class="navbar-toggler-icon"></span>
							</button>
							<div
								class="collapse navbar-collapse "
								id="navbarSupportedContent"
							>
								<ul class="navbar-nav m-auto">
									<li class="nav-item">
										<NavLink
											class="nav-link active"
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
									<li class="nav-item">
										<NavLink
											class="nav-link"
											to="/services"
											activeStyle={{
												fontWeight: "bold",
												color: "blue",
											}}
										>
											Services
										</NavLink>
									</li>
									<li class="nav-item ">
										<NavLink
											class="nav-link "
											to="/about"
											activeStyle={{
												fontWeight: "bold",
												color: "blue",
											}}
										>
											About us
										</NavLink>
									</li>
									<li class="nav-item">
										<NavLink
											class="nav-link "
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
								<div class="d-flex align-items-center justify-content-center">
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
