import {
	getAuth,
	createUserWithEmailAndPassword,
	sendEmailVerification,
	signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Register.css";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const auth = getAuth();

	const handleRegistration = (e) => {
		e.preventDefault();
		// console.log(email, password);
		if (password.length < 6) {
			setError("Password Must be at least 6 characters long.");
			return;
		}
		if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
			setError("Password must contain 2 upper case");
			return;
		}
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				setError("");
				verifyEmail();
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	const verifyEmail = () => {
		sendEmailVerification(auth.currentUser).then((result) => {
			console.log(result);
		});
	};

	const handleEmailChange = (e) => {
		console.log(e.target.value);
		setEmail(e.target.value);
	};

	const handlePasswordChange = (e) => {
		console.log(e.target.value);
		setPassword(e.target.value);
	};

	return (
		<div>
			<div className="register">
				<Header />
				<div className="row ">
					<div className="col-md-3"></div>
					<div className="col-md-6">
						<form className="p-5 sign-up">
							<h1 className="sign-in">Sign Up</h1>
							<div className="d-flex flex-column p-2">
								<input
									type="text"
									required
									placeholder="Username"
									className="border-0 p-3 mb-4"
								/>
								<input
									onChange={handleEmailChange}
									type="email"
									required
									placeholder="Enter your email"
									className="border-0 p-3 mb-4"
								/>
								<input
									onBlur={handlePasswordChange}
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
							<div className="row mb-3 text-danger text-center">{error}</div>
							<div className="p-2 mb-2">
								<button
									onClick={handleRegistration}
									type="submit"
									className="login-btn"
								>
									Create Account Now
								</button>
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
						</form>
					</div>
					<div className="col-md-3"></div>
				</div>
				<Footer />
			</div>
		</div>
	);
};

export default Register;
