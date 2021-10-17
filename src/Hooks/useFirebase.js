import initializeAuthentication from "../Firebase/Firebase.init";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
	// Use State For Google
	const [user, setUser] = useState({});
	const [error, setError] = useState("");

	const auth = getAuth();

	// Sign in with Existing Email Password
	const handleUserLogin = (email, password) => {
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setUser(result.user);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	// for onAuthStateChange
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setError(error);
			}
		});
	}, []);

	// Create User
	const handleUserRegister = (email, password) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				setUser(result.user);
			})
			.catch((error) => {
				setError(error.message);
			});
	};

	// handle logout
	const handleLogout = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
				setUser("");
			})
			.catch((error) => {
				// An error happened.
				setError("");
			});
	};
	return { user, error, handleUserLogin, handleUserRegister, handleLogout };
};
export default useFirebase;
