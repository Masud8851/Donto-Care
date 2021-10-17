import React from "react";
import Navbar from "../NavBar/Navbar";
import "./Services.css";

const Services = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div>
				<div className="container">
					<div className="row">
						<div className="col-md-6 p-3">
							<h1>Service Details</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
								hic?
							</p>
						</div>
						<div className="col-md-6 p-3">
							<div className="col-12 col-md-6 col-lg-6">
								<div className="page-banner-img">
									<div className="banner-animate">
										<img src="" alt="" className="a1" />
										<img src="" className="bannerimg a3" alt="" />
										<img src="" className="bannerimg a4" alt="" />
										<img src="" className="bannerimg a5" alt="" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
