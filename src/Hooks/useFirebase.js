import { useEffect, useState } from "react";
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
import initializeAuthentication from "../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [error, setError] = useState("");

	const auth = getAuth();

	const googleProvider = new GoogleAuthProvider();
	const githubProvider = new GithubAuthProvider();

	const [doctors, setDoctors] = useState([]);
	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setDoctors(data));
	}, []);

	// sign in with google
	const signInUsingGoogle = () => {
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// console.log(result.user);
				setUser(result.user);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	// sign in with git
	const signInUsingGithub = () => {
		signInWithPopup(auth, githubProvider).then((result) => {
			setUser(result.user);
		});
	};

	const logout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				setUser("");
			})
			.catch((error) => {
				// An error happened.
				// setError(error.message);
			});
	};

	// new User
	const registerNewUser = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				const user = result.user;
				console.log(user);
				setError("");
			})
			.catch((error) => {
				setError(error.message);
			});
	};
	const processLogin = (email, password) => {
		console.log("Hello", email, password);
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

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			}
		});
	}, []);

	return {
		doctors,
		user,
		error,
		signInUsingGoogle,
		signInUsingGithub,
		logout,
		registerNewUser,
		processLogin,
	};
};

export default useFirebase;
