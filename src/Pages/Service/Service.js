import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import first from "../../image/About/about-4.png";
import useFirebase from "../../Hooks/useFirebase";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Service = ({ services }) => {
	const { id } = useParams();
	console.log(id);
	// const { id, img, title, description } = service;

	return (
		<div>
			<div className="services-head">
				<Header />
				<div>
					<div className="container">
						<div className="row align-items-center justify-content-center">
							<div className="col-md-6 ">
								<h1>Service Details</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Ipsam, hic?
								</p>
							</div>
							<div className="col-md-6 ">
								<div>
									<img src={first} id="teeth" alt="" className="p-3 w-75" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div>
				<h1>{id}</h1>
			</div>
			{/* Main Service */}
			{/* <div className="container">
				<div className="service pb-3">
					<img src={img} alt="" />
					<h3>{title}</h3>
					<h5>Price: {description}</h5>
					<p className="px-3">{description}</p>
					<Link to={`/service/${id}`}></Link>
				</div>
			</div> */}
			<Footer />
		</div>
	);
};

export default Service;
