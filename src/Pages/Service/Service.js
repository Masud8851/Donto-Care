import React from "react";
import { useParams } from "react-router";
import Header from "../Header/Header";
import first from "../../image/About/about-4.png";
import Footer from "../Footer/Footer";
import useAuth from "../../Hooks/useAuth";
import { Card, Container, Row } from "react-bootstrap";

const Service = () => {
	const { id } = useParams();
	const { doctors } = useAuth();
	console.log(doctors);

	const doctor = doctors.filter((dr) => dr.id == id);
	console.log(doctor);
	return (
		<div>
			<div className="services-head">
				<Header />
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
									<img src={first} id="teeth" alt="" className="p-3 w-75" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<h1 className="text-success">[ Details ]</h1>

				<Container className="text-center justify-content-center">
					<div className="row">
						<div className="col-md-3"></div>
						<div className="col-md-6">
							<Card className="h-100">
								<Card.Img variant="top" src={doctor[0]?.img} height="200" />
								<Card.Body>
									<Card.Title>{doctor[0]?.title}</Card.Title>
									<Card.Text>{doctor[0]?.description}</Card.Text>
								</Card.Body>
							</Card>
						</div>
						<div className="col-md-3"></div>
					</div>
				</Container>
				<Footer />
			</div>
		</div>
	);
};

export default Service;
