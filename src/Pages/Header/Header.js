import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import logo from "../../image/logo/logo.png";
import "./Header.css";

const Header = () => {
	const { user, logout } = useAuth();

	return (
		<div>
			<div className="nav-head">
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
									<li className="nav-item">
										<NavLink
											className="nav-link"
											to="/doctors"
											activeStyle={{
												fontWeight: "bold",
												color: "blue",
											}}
										>
											Doctors
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
										<div>
											<span>{user.displayName} </span>
											<button onClick={logout} className="btn btn-primary m-2">
												Logout
											</button>
										</div>
									) : (
										<NavLink to="/login" className="btn btn-primary m-2">
											Login
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

export default Header;
