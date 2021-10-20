import React, { useEffect, useState } from "react";
import "./Services.css";
import first from "../../image/About/about-4.png";
import useFirebase from "../../Hooks/useFirebase";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Service from "../Service/Service";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Services = () => {
	const { id, doctors } = useFirebase();
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("data.json")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);

	return (
		<div>
			<div>
				<div className="services-head">
					<Header />
					<div>
						<div className="container">
							<div className="row align-items-center justify-content-center">
								<div className="col-md-6 ">
									<h1>Our Services</h1>
									<p className="text-start">
										Lorem ipsum dolor sit amet consectetur adipisicing elit.
										Nihil eveniet dicta tempore neque magnam repudiandae magni
										similique tempora sint, quaerat alias corrupti deserunt
										excepturi hic officiis iusto, esse laboriosam aut. Delectus
										quod consectetur rerum explicabo molestiae totam porro,
										dolorem sequi neque accusantium ab perferendis.
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
				</div>
				<h1 className="mt-5 text-success">[ Services ]</h1>
				<Container>
					<Row xs={1} md={3} className="g-4 py-4">
						{services.map((service) => (
							<Col>
								<Card className="h-100">
									<Card.Img variant="top" src={service.img} height="200" />
									<Card.Body>
										<Card.Title>{service.title}</Card.Title>
										<Card.Text>
											{`${service.description.slice(0, 100)}...`}
										</Card.Text>
										<Link to={`/service/${service?.id}`}>
											<button className="btn btn-primary btn-sm">
												View Details
											</button>
										</Link>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
				<Footer />
			</div>
		</div>
	);
};

export default Services;
