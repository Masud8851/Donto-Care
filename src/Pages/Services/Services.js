import React from "react";
import "./Services.css";
import first from "../../image/About/about-4.png";

const Services = () => {
	return (
		<div>
			<div>
				<div className="services-head">
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
										<img src={first} id="teeth" alt="" className="p-3" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<h1>Services</h1>
				<div class="row row-cols-1 row-cols-md-3 g-4">
					<div class="col">
						<div class="card h-100">
							<img src="..." class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">
									This is a wider card with supporting text below as a natural
									lead-in to additional content. This content is a little bit
									longer.
								</p>
							</div>
							<div class="card-footer">
								<small class="text-muted">Last updated 3 mins ago</small>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
