import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getFormattedDate from '../../utils/getFormattedDate';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './vessel.scss';

const ViewVessel = ({ vessel, auth, onDelete, onEdit, onFindBerth }) => {
  const { name, description, length, weight, depth, date } = vessel;
  const addedDate = getFormattedDate(date);
  return (
    <Container className="mt-4 viewVessel">
      <Link to="/vessels">
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
        <Col>Description: {description}</Col>
      </Row>
      <Row className="my-4" style={{ whiteSpace: 'pre-wrap' }}>
        <Col>Length: {length}</Col>
      </Row>
      <Row className="my-4" style={{ whiteSpace: 'pre-wrap' }}>
        <Col>Weight: {weight}</Col>
      </Row>
      <Row className="my-4" style={{ whiteSpace: 'pre-wrap' }}>
        <Col>Depth: {depth}</Col>
      </Row>
      <Row className="d-flex flex-column font-italic footerStyle">
        <Col>Date added: {addedDate}</Col>
      </Row>
      {auth && (
        <Row className="mt-4">
          <Col className="text-center">
            <Button
              className="mr-2"
              variant="outline-success"
              onClick={onFindBerth}
            >
              Find Berth
            </Button>
            <Button className="mr-2" variant="outline-info" onClick={onEdit}>
              Edit
            </Button>
            <Button variant="outline-danger" onClick={onDelete}>
              Delete
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

ViewVessel.propTypes = {
  vessel: PropTypes.object.isRequired,
  auth: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ViewVessel;
