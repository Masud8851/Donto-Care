import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
	return (
		<div>
			<div className="not-Found align-items-center justify-content-center">
				<div>
					<img src="https://i.ibb.co/3k00cRg/404.png" className="logo-404" />
				</div>

				<div>
					<p className="title">Oh no!!</p>
					<p className="subtitle">
						You’re either misspelling the URL <br /> or requesting a page that's
						no longer here.
					</p>
				</div>
				<div className="text-center">
					<Link className="btn btn-outline-light btn-back" to="/">
						Back to previous page
					</Link>
				</div>
				<div>
					<img
						src="https://i.ibb.co/pbB2c6b/astronaut.png"
						className="astronaut"
					/>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
