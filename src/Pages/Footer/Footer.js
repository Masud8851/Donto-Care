import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<h1>Practice</h1>
						<ul>
							<li>
								<NavLink>About</NavLink>
							</li>
							<li>
								<NavLink>For Patients</NavLink>
							</li>
							<li>
								<NavLink>FAQs</NavLink>
							</li>
							<li>
								<NavLink>Contact Us</NavLink>
							</li>
							<li>
								<NavLink>Blog</NavLink>
							</li>
						</ul>
					</div>
					<div className="col-md-3">
						<h1>Resources</h1>
						<ul>
							<li>
								<NavLink>New Patients</NavLink>
							</li>
							<li>
								<NavLink>Meet the Team</NavLink>
							</li>
							<li>
								<NavLink>Patient Form</NavLink>
							</li>
							<li>
								<NavLink>Insurance</NavLink>
							</li>
							<li>
								<NavLink>Account Login</NavLink>
							</li>
						</ul>
					</div>
					<div className="col-md-3">
						<h1>Services</h1>
						<ul>
							<li>
								<NavLink>Dental Dictionary</NavLink>
							</li>
							<li>
								<NavLink>Dental Sealands</NavLink>
							</li>
							<li>
								<NavLink>Dental Implants</NavLink>
							</li>
							<li>
								<NavLink>General Dentistry</NavLink>
							</li>
							<li>
								<NavLink>Sedation Dentistry</NavLink>
							</li>
						</ul>
					</div>
					<div className="col-md-3">
						<h1>Our Address</h1>
						<p>Datobbo Dentistry 5212 Cedar</p>
						<p>Village Dr Mason, NY.</p>
						<p>Phone:+1 3500 5867 340</p>
						<p>Email:yourdomain@gmail.com</p>
						<p>Fax:+1 675 5867 340</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
