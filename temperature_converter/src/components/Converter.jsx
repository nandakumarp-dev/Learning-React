import React, { useState } from 'react';
import {
  Card, Form, Row, Col, InputGroup,
} from 'react-bootstrap';

const units = ['Celsius', 'Fahrenheit', 'Kelvin'];

const convertTemperature = (value, from, to) => {
  if (isNaN(value) || !from || !to) return '';
  let temp = parseFloat(value);

  if (from === 'Fahrenheit') temp = (temp - 32) * 5 / 9;
  if (from === 'Kelvin') temp = temp - 273.15;

  if (to === 'Fahrenheit') return (temp * 9 / 5 + 32).toFixed(2);
  if (to === 'Kelvin') return (temp + 273.15).toFixed(2);
  return temp.toFixed(2);
};

const Converter = () => {
  const [input, setInput] = useState('');
  const [fromUnit, setFromUnit] = useState('');
  const [toUnit, setToUnit] = useState('');

  const result = convertTemperature(input, fromUnit, toUnit);

  return (
    <Card className="shadow p-4 rounded-4" style={{ width: '100%', maxWidth: '500px', margin: '0 auto' }}>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Enter Temperature</Form.Label>
            <InputGroup>
              <Form.Control
                type="number"
                placeholder="e.g. 32"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="p-3 fs-5 rounded"
              />
            </InputGroup>
          </Form.Group>

          <Row className="mb-3">
            <Col>
              <Form.Label className="fw-semibold">From</Form.Label>
              <Form.Select
                value={fromUnit}
                onChange={(e) => setFromUnit(e.target.value)}
                className="fs-6 rounded"
              >
                <option value="">-- Select Unit --</option>
                {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
              </Form.Select>
            </Col>
            <Col className="text-center align-self-end pb-3">→</Col>
            <Col>
              <Form.Label className="fw-semibold">To</Form.Label>
              <Form.Select
                value={toUnit}
                onChange={(e) => setToUnit(e.target.value)}
                className="fs-6 rounded"
              >
                <option value="">-- Select Unit --</option>
                {units.map(unit => <option key={unit} value={unit}>{unit}</option>)}
              </Form.Select>
            </Col>
          </Row>

          {result && (
            <Card className="bg-success text-white text-center mt-3 p-3 rounded-3 shadow-sm">
              <h4 className="mb-0">
                Converted: {result} {toUnit}
              </h4>
            </Card>
          )}
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Converter;
