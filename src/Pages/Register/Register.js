import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

const Register = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="row register">
				<div className="col-md-3"></div>
				<div className="col-md-6">
					<div className="p-5 login-from">
						<h1 className="sign-in">Sign Up</h1>
						<div className="d-flex flex-column p-2">
							<input
								type="text"
								required
								placeholder="Username"
								className="border-0 p-3 mb-4"
							/>
							<input
								type="email"
								required
								placeholder="Enter your email"
								className="border-0 p-3 mb-4"
							/>
							<input
								type="password"
								required
								placeholder="Enter password"
								className="border-0 p-3 mb-4"
							/>
							<input
								type="password"
								required
								placeholder="Confirrm password"
								className="border-0 p-3 mb-1"
							/>
						</div>
						<div className="p-2 mb-2">
							<button className="login-btn">Create Account Now</button>
						</div>

						<Link className="already-account" to="/login">
							Already have an account???
						</Link>
						<p className="text-center mt-4">
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
				<div className="col-md-3"></div>
			</div>
		</div>
	);
};

export default Register;
