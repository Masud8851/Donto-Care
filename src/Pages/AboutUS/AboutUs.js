import React from "react";
import "./AboutUs.css";
import first from "../../image/About/about-4.png";

const AboutUs = () => {
	return (
		<div>
			<div>
				<div className="services-head">
					<div>
						<div className="container">
							<div className="row g-3 align-items-center justify-content-center">
								<div className="col-md-6 ">
									<h1>About us</h1>
									<p>
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Ipsam,.
									</p>
								</div>
								<div className="col-md-6 ">
									<div>
										<img src={first} id="teeth" alt="" className="p-4 w-75" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Main Part */}
				<div className="container mt-5 mb-5">
					<h1>Our Dental Practice</h1>
					<p>
						Since 1998, Donto Dentistry has been proud to combine modern
						techniques and high-tech equipment. Dr. John Dae, Micha and his team
						deliver a personalized and comfortable dental care experience unlike
						any other Mason dentist.
					</p>
				</div>
				{/* Focus Approach */}
				<div className="focus">
					<div className="row row-cols-1 row-cols-md-3 g-4 m-4">
						<div className="col">
							<div className="card card-bg">
								<img
									src="https://i.ibb.co/mSHGb30/love.png"
									className="card-img-top w-25 mx-auto p-3"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Consolation</h5>
									<p className="card-text">
										This is a longer card with supporting text below as a
										natural lead-in to additional content. This content is a
										little bit longer.
									</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card card-bg">
								<img
									src="https://i.ibb.co/56vf3xd/love-2.png"
									className="card-img-top w-25 mx-auto p-3"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Familiarity</h5>
									<p className="card-text">
										This is a longer card with supporting text below as a
										natural lead-in to additional content. This content is a
										little bit longer.
									</p>
								</div>
							</div>
						</div>
						<div className="col">
							<div className="card card-bg">
								<img
									src="https://i.ibb.co/gvMg7YR/love-3.png"
									className="card-img-top w-25 mx-auto p-3"
									alt="..."
								/>
								<div className="card-body">
									<h5 className="card-title">Outcome</h5>
									<p className="card-text">
										This is a longer card with supporting text below as a
										natural lead-in to additional content.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Experience Doctors */}
				<div className="container mt-5 mb-5">
					<div className="row align-items-center  ">
						<div className="col-md-6">
							<img
								src="https://i.ibb.co/9Y0FNR5/Cute-girl-and-her-mother-looking-at-the-doctor-in-hospital.jpg"
								alt=""
								className="w-100"
							/>
						</div>
						<div className="col-md-6 text-start">
							<h1>Experienced Dentist</h1>
							<p>
								Smiling comes naturally to Dr. Harrie, author of ‘Donto’. He has
								embraced Cosmetic Dentistry and has redesigned the smiles for
								thev thousands of patients.
							</p>
							<p>
								Dr. Harrie believes in providing her patients with more than
								just world class dental care. He also helps patients recognize
								the vital connection between dental health and whole body
								health. A graduate of the University of California’s School of
								Dentistry, Dr. Harrie is a leader in the movement to bring
								environmental sanity and well-being into the dental world for
								future.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
