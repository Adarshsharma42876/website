import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Row, Col, Button } from "react-bootstrap";
const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <Container className="p-4">
        <Row>
          <Col  md={4}>
            <div className="gallery">
            <img id="gallery" src={car.image} height="190px" alt={car.name} />
            </div>
            
          </Col>

          <h2 id="mk">
            {car.brand} {car.Year}
          </h2>
          <h1 id="io">
             {car.people} {car.power}
          </h1>
          <h1 id="ol">
            {car.km} {car.faclties}
          </h1>
          <p id="ty">  {car.price} <Button id="we">Rent Now</Button></p>
          <Col md="4"></Col>
        </Row>
      </Container>
    </div>
  );
};

export default CarCard;
