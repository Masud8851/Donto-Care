import React from "react";
import logo from "../../image/logo/logo.png";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
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
										<NavLink class="nav-link active" aria-current="page" to="#">
											Home
										</NavLink>
									</li>
									<li class="nav-item">
										<NavLink class="nav-link" to="#">
											Link
										</NavLink>
									</li>
									<li class="nav-item dropdown">
										<NavLink
											class="nav-link dropdown-toggle"
											to="#"
											id="navbarDropdown"
											role="button"
											data-bs-toggle="dropdown"
											aria-expanded="false"
										>
											Dropdown
										</NavLink>
										<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
											<li>
												<NavLink class="dropdown-item" to="#">
													Action
												</NavLink>
											</li>
											<li>
												<NavLink class="dropdown-item" to="#">
													Another action
												</NavLink>
											</li>
											<li>
												<hr class="dropdown-divider" />
											</li>
											<li>
												<NavLink class="dropdown-item" to="#">
													Something else here
												</NavLink>
											</li>
										</ul>
									</li>
									<li class="nav-item">
										<NavLink
											class="nav-link disabled"
											to="#"
											tabindex="-1"
											aria-disabled="true"
										>
											Disabled
										</NavLink>
									</li>
								</ul>
								<div class="d-flex align-items-center justify-content-center">
									<p>user name</p>
									<button className="btn btn-primary m-2">Sign in</button>
									<button className="btn btn-primary m-2">Sign up</button>
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
