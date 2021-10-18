import React from "react";
import Navbar from "../NavBar/Navbar";
import { useState } from "react";
import Calendar from "react-calendar";

const Appointment = () => {
	const [value, onChange] = useState(new Date());
	return (
		<div>
			<div>
				<div className="services-head">
					<Navbar></Navbar>
					<div>
						<div className="container">
							<div className="row align-items-center justify-content-center p-3">
								<div className="col-md-6 p-3">
									<h1 className="text-dark text-start">
										Take Your Appintment Here
									</h1>
									<p className="text-start">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Ipsam, hic?
									</p>
								</div>
								<div className="col-md-6 p-3">
									<div>
										<img
											src="https://i.ibb.co/58hYKkL/3884687.jpg"
											id="teeth"
											alt=""
											className="p-5"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container mt-5 mb-5">
					<h1 className="pb-5">Request Appointment</h1>
					<form className="row g-3 align-items-center">
						<div class="col-md-6 touch-input">
							<div>
								<input
									type="text"
									required
									placeholder="Name"
									className="border-0 p-3 w-100 mb-3"
								/>
							</div>
							<div>
								<input
									type="text"
									required
									placeholder="Phone"
									className="border-0 p-3 w-100 mb-3"
								/>
							</div>
						</div>
						<div class="touch-input col-md-6">
							<Calendar onChange={onChange} value={value} />
						</div>
					</form>

					<button class="contact-submit-btn" type="submit">
						Confirm
					</button>
				</div>
			</div>
		</div>
	);
};

export default Appointment;