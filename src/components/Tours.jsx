// components/Tours.js
import { Container, Row, Col, Button } from "react-bootstrap";
import { tours } from "../data/toursData";

const Tours = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-4">TOURS</h2>

      {tours.map((tour, index) => (
        <Row
          key={index}
          className="align-items-center py-3 border-bottom"
        >
          <Col md={2} className="fw-bold">
            {tour.date}
          </Col>

          <Col md={3}>{tour.city}</Col>

          <Col md={4}>{tour.venue}</Col>

          <Col md={3} className="text-md-end mt-2 mt-md-0">
            <Button variant="info" className="px-4">
              BUY TICKETS
            </Button>
          </Col>
        </Row>
      ))}
    </Container>
  );
};

export default Tours;