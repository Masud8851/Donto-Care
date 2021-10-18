import React from "react";
import Navbar from "../NavBar/Navbar";
import "./Home.css";
import banner from "../../image/banner/hero-theeth.png";
import firstimg from "../../image/banner/woman-brush.c4158ac5.png";
import secondimg from "../../image/banner/doctorfinding.c2532ac3.png";
import appointment from "../../image/emerhgency/appointment.c2e8b7ae.svg";
import emergency from "../../image/emerhgency/emergency.svg";
import t427 from "../../image/emerhgency/2in4ty.svg";
import { NavLink } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<div className="header ">
				<Navbar></Navbar>
				<div className="mt-5 mb-5 pb-5">
					<div className="container">
						<div className="row align-items-center justify-content-center g-4">
							<div className="col-md-6 text-start">
								<h4>Better Life Through</h4>
								<h3>Better Dentistry</h3>
								<p>
									Join us to a fun and friendly dental environment. Our
									professionals are working so hard to see smile on your face
									that you deserve! We are dedicated about our duties.
								</p>
								<div>
									<NavLink to="/appoitment" className="btn btn-warning m-2 p-3">
										Appointment
									</NavLink>
									<NavLink to="/about" className="btn btn-warning m-2 p-3">
										Learn More
									</NavLink>
								</div>
							</div>
							<div className="col-md-6">
								<div className="hero-slide-right">
									<div className="animate-img">
										<img className="aimg1" src={firstimg} alt="" />
										<img className="aimg2" src={secondimg} alt="" />
									</div>
									<img src={banner} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row row-cols-1 row-cols-md-3 g-4">
					<div className="col">
						<div className="card h-100">
							<img
								src={appointment}
								className="card-img-top rounded mt-3  mx-auto p-2 w-25 m-2"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title m-1">Easy Appointment</h5>
								<p className="card-text m-3">
									Easy Appointment Lorem ipsum dolor sit amet. Lorem ipsum dolor
									sit amet.
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<img
								src={emergency}
								className="card-img-top  mx-auto p-2 w-25 m-2"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title m-1">Emergency Service</h5>
								<p className="card-text m-3">
									Emergency Service Lorem ipsum, dolor sit amet consectetur
									adipisicing elit. Sed, placeat.{" "}
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card h-100">
							<img
								src={t427}
								className="card-img-top rounded-circle mx-auto p-2 w-25 m-3"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title m-1">24/7 Service</h5>
								<p className="card-text m-3">
									24/7 Service Lorem ipsum dolor, sit amet consectetur
									adipisicing elit. Ut quis pariatur expedita?
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Services 6 */}
			<h1>Services 6</h1>
			<br />
			{/* <Footer></Footer> */}
		</div>
	);
};

export default Home;
