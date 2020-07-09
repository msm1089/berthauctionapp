import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getFormattedDate from '../../utils/getFormattedDate';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './summary.scss';

const Summary = ({ vessel, auth }) => {
  const { name, description, length, weight, depth, date } = vessel;

  return (
    <Container className="mt-4 viewVessel">
      <Link to="/search">
        <Button variant="light" className="styleBtn">
          {'<'}
        </Button>
      </Link>
      <Row>
        <Col className="text-center vesselName">
          <h2>{name}</h2>
        </Col>
      </Row>
      <Row className="my-4" style={{ whiteSpace: 'pre-wrap' }}>
        <Col>thing: {10 - 5}</Col>
      </Row>
      <Row className="my-4" style={{ whiteSpace: 'pre-wrap' }}>
        <Col>another thing: {1 - 1}</Col>
      </Row>
      <Row className="my-4" style={{ whiteSpace: 'pre-wrap' }}>
        <Col>ok: {99 * 99}</Col>
      </Row>
      <Row className="my-4" style={{ whiteSpace: 'pre-wrap' }}>
        <Col>a thing: {10 + 10}</Col>
      </Row>
      <Row className="d-flex flex-column font-italic footerStyle">
        <Col>something: {1 + 1}</Col>
      </Row>
      {auth && (
        <Row className="mt-4">
          <Col className="text-center">
            <Button
              className="mr-2"
              variant="outline-success"
              onClick={() => console.log('button1')}
            >
              Button1
            </Button>
            <Button
              className="mr-2"
              variant="outline-info"
              onClick={() => console.log('button2')}
            >
              Button2
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => console.log('button3')}
            >
              Button3
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

Summary.propTypes = {};

export default Summary;
