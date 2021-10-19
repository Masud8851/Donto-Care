import React from "react";
import "./Contact.css";
import first from "../../image/About/about-4.png";
import { Link } from "react-router-dom";

const Contact = () => {
	return (
		<div>
			<div className="services-head">
				<div>
					<div className="container">
						<div className="row g-3 align-items-center justify-content-center p-3">
							<div className="col-md-6 p-3">
								<h1>Service Details</h1>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Ipsam, hic?
								</p>
							</div>
							<div className="col-md-6 p-3">
								<div>
									<img src={first} id="teeth" alt="" className="p-5" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container mt-5">
				<div className="row g-3">
					<div class="col-lg-6 col-xl-4 col-md-6 col-12">
						<div class="single-contact-info ">
							<div class="c-icon icon1">
								<i class="fas fa-home"></i>
							</div>
							<div class="c-info">
								<h4>Address</h4>
								<p>55 West, 33rd Street</p>
								<p>5th Floor, New York</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-xl-4 col-md-6 col-12">
						<div class="single-contact-info icon2">
							<div class="c-icon">
								<i class="far fa-envelope"></i>
							</div>
							<div class="c-info">
								<h4>email</h4>
								<p>info@dentzone.com</p>
								<p>email@gmail.com</p>
							</div>
						</div>
					</div>
					<div class="col-lg-6 col-xl-4 col-md-6 col-12">
						<div class="single-contact-info icon3">
							<div class="c-icon">
								<i class="fas fa-phone-volume"></i>
							</div>
							<div class="c-info">
								<h4>Phone</h4>
								<p>(888) 4421-1238-32</p>
								<p>(888) 838-1238-645</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Get In Touch */}
			<div className="container mt-5 pt-3  get-in-touch">
				<h1>Get In Touch</h1>

				<div>
					<form className="row g-3 align-items-center">
						<div class="col-md-6 touch-input">
							<input
								type="text"
								required
								placeholder="Name"
								className="border-0 p-3 w-100 mb-3"
							/>
						</div>
						<div class="touch-input col-md-6">
							<input
								type="email"
								required
								placeholder="Email"
								className="border-0 p-3 w-100 mb-3"
							/>
						</div>
					</form>
					<form className="row g-3 align-items-center">
						<div class="touch-input col-md-6">
							<input
								type="text"
								required
								placeholder="Phone"
								className="border-0 p-3 w-100 mb-3"
							/>
						</div>
						<div class="touch-input col-md-6">
							<input
								type="text"
								required
								placeholder="Subject"
								className="border-0 p-3 w-100 mb-3"
							/>
						</div>
					</form>
					<form className="row g-3 align-items-center">
						<div class="touch-input col-md-12">
							<textarea
								name="message"
								required
								placeholder="Message"
								className=" text-start border-0 p-3 w-100 mb-3"
							></textarea>
						</div>
					</form>
					<Link
						to="/"
						className="contact-submit-btn m-2 p-3 mt-5 ms-0"
						type="submit"
					>
						Confirm
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
