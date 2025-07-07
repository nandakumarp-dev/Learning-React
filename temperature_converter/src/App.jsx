import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Converter from './components/Converter';

const App = () => {
  return (
    <Container fluid className="d-flex justify-content-center align-items-center min-vh-100 bg-gradient">
      <Row>
        <Col>
          <h1 className="text-center mb-4 fw-bold text-dark">🌡️ Temperature Converter</h1>
          <Converter />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
