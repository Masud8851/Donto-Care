import React from "react";
import "./Contact.css";

const Contact = () => {
	return (
		<div>
			<div className="container mt-5">
				<div className="row">
					<div class="col-lg-6 col-xl-4 col-md-6 col-12">
						<div class="single-contact-info icon1">
							<div class="c-icon">
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
								<i class="fal fa-envelope"></i>
							</div>
							<div class="c-info">
								<h4>email</h4>
								<p>info@dentzone.com</p>
								<p>email@gmail.com</p>
							</div>
						</div>
					</div>
					<div className="col-md-4"></div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
