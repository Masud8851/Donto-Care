import React from "react";
import { useParams } from "react-router";

const Service = ({ doctors }) => {
	const { id } = useParams();
	return (
		<div>
			<h2>Service{id}</h2>
		</div>
	);
};

export default Service;
