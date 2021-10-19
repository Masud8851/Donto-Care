import initializeAuthentication from "../Firebase/Firebase.init";
import { useEffect, useState } from "react";

initializeAuthentication();
const useFirebase = () => {
	const [doctors, setDoctors] = useState([]);
	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setDoctors(data));
	}, []);

	return {
		doctors,
	};
};
export default useFirebase;
