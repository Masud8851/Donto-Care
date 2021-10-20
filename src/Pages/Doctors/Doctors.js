import React from "react";
import first from "../../image/About/about-4.png";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Doctors.css";

const Doctors = () => {
	return (
		<div>
			<div className="services-head">
				<Header />
				<div className="container">
					<div className="row align-items-center justify-content-center">
						<div className="col-md-6 ">
							<h1>Service Details</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
								hic?
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

			<div className="container mt-5 mb-5">
				<h1 className="text-center text-success mb-5">
					{" "}
					[ Boulder’s Trusted Dentists ]
				</h1>
				<div className="row row-cols-1 row-cols-md-3 g-4">
					<div className="col">
						<div className="card">
							<img
								src="https://i.ibb.co/89QBwNZ/portrait-dantist-dental-clinic-105818-94.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Dr. Lee</h5>
								<p className="card-text">
									The DDS (Doctor of Dental Surgery) and DMD (Doctor of Medicine
									in Dentistry or Doctor of Dental Medicine) are the same
									degrees.
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img
								src="https://i.ibb.co/pfBw4YP/Dentist-showing-the-correct-dental-hygiene-using-mock-up-of-skeleton-of-teeth-Stomatologist-doctor-e.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Darry Milin</h5>
								<p className="card-text">
									The DDS (Doctor of Dental Surgery) and DMD (Doctor of Medicine
									in Dentistry or Doctor of Dental Medicine) are the same
									degrees.
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img
								src="https://i.ibb.co/7v6kfJy/Female-dentist-with-dentistry-tools-isolated.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Santa Binte</h5>
								<p className="card-text">
									The DDS (Doctor of Dental Surgery) and DMD (Doctor of Medicine
									in Dentistry or Doctor of Dental Medicine) are the same
									degrees.
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img
								src="https://i.ibb.co/s5WmX81/Dentist-with-dentistry-tools-isolated.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Salma Jahan</h5>
								<p className="card-text">
									The DDS (Doctor of Dental Surgery) and DMD (Doctor of Medicine
									in Dentistry or Doctor of Dental Medicine) are the same
									degrees.
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img
								src="https://i.ibb.co/n6xYQWq/dentist-examining-female-patient-with-tools-107420-74189.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Nasima Halder</h5>
								<p className="card-text">
									The DDS (Doctor of Dental Surgery) and DMD (Doctor of Medicine
									in Dentistry or Doctor of Dental Medicine) are the same
									degrees.
								</p>
							</div>
						</div>
					</div>
					<div className="col">
						<div className="card">
							<img
								src="https://i.ibb.co/7v6kfJy/Female-dentist-with-dentistry-tools-isolated.jpg"
								className="card-img-top"
								alt="..."
							/>
							<div className="card-body">
								<h5 className="card-title">Nusrat Jahan</h5>
								<p className="card-text">
									The DDS (Doctor of Dental Surgery) and DMD (Doctor of Medicine
									in Dentistry or Doctor of Dental Medicine) are the same
									degrees.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Doctors;
