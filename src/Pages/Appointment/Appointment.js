import React from "react";
import { useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "./Appoinment.css";

const Appointment = () => {
	const [date, setDate] = useState(new Date());
	const onChange = (date) => {
		setDate(date);
	};
	return (
		<div>
			<div>
				<div className="services-head">
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
						<div class="col-md-6 appointment-input">
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
							<Calendar onChange={onChange} value={date} />
						</div>
					</form>

					<Link to="/" className="confirm-btn m-2 p-3 mt-5 ms-0" type="submit">
						Confirm
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Appointment;
