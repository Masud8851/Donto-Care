import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import login from "../../image/login/login-side.jpg";
import "./Login.css";
import Footer from "../Footer/Footer";

const Login = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="login">
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-md-6 p-5">
							<img src={login} alt="" className="w-100" />
						</div>
						<div className="col-md-6">
							<div className="p-5 login-from">
								<h1 className="sign-in">Sign In</h1>
								<div className="d-flex flex-column p-2">
									<input
										type="email"
										required
										placeholder="Enter your email"
										className="border-0 p-3 mb-4"
									/>
									<input
										type="password"
										required
										placeholder="password"
										className="border-0 p-3 mb-1"
									/>
								</div>
								<div className="p-2">
									<button className="login-btn">Login</button>
								</div>
								<div className="d-flex justify-content-between">
									<Link className="forgot-password text-primary" to="/register">
										Didn't have any account?
									</Link>
									<Link className="forgot-password" to="">
										Forgot password?
									</Link>
								</div>
								<p className="text-center mt-1">
									<i>------------ Or Login With ------------</i>
								</p>
								<div className="d-flex justify-content-center ">
									<Link className="social-button rounded-pill w-25 text-center p-2 me-3 text-white">
										<i class="fab fa-google"></i> Google
									</Link>
									<Link
										to=""
										className="social-button rounded-pill w-25 text-center p-2 me-3 text-white"
									>
										<i class="fab fa-google"></i> Git
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
