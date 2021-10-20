import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import login from "../../image/login/login-side.jpg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Login.css";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	GithubAuthProvider,
	onAuthStateChanged,
	signOut,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	sendPasswordResetEmail,
} from "firebase/auth";

const Login = () => {
	const auth = getAuth();
	const { signInUsingGoogle, signInUsingGithub } = useAuth();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const getEmail = (e) => {
		console.log(e.target.value);
		setEmail(e.target.value);
	};

	const getPassword = (e) => {
		console.log(e.target.value);
		setPassword(e.target.value);
	};
	const handleLogin = (e) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				// Signed in
				const user = result.user;
				console.log(user);
				setError("");
				// ...
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	return (
		<div>
			<div className="login-body">
				<Header />
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
											onChange={getEmail}
											type="email"
											required
											placeholder="Enter your email"
											className="border-0 p-3 mb-4"
										/>
										<input
											onBlur={getPassword}
											type="password"
											required
											placeholder="password"
											className="border-0 p-3 mb-1"
										/>
									</div>
									<div className="p-2">
										<Link onClick={handleLogin} className="login-btn">
											Login
										</Link>
									</div>
									<div className="d-flex justify-content-between">
										<Link className="any-account" to="/register">
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
										<Link
											onClick={signInUsingGoogle}
											className="social-button rounded-pill w-25 text-center p-2 me-3 text-white"
										>
											<i class="fab fa-google"></i> Google
										</Link>
										<Link
											onClick={signInUsingGithub}
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
				<Footer />
			</div>
		</div>
	);
};

export default Login;
