import React from "react";
import { Container, Col, Row } from "react-bootstrap";

function Home(props) {
  return (
    <Container fluid className="home-page">
      <Row className="justify-content-center">
        <Col sm={12} md={12}>
          <h1 className="text-center home-page-title mt-5 mb-5">Welcome</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
