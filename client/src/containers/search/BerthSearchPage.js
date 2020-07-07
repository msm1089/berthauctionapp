import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

const BerthSearchPage = ({ isAuthenticated, match, vessel }) => {
  const { name, description, length, weight, depth } = vessel;

  return (
    <Container className="mt-4 viewVessel">
      <Row>
        <Col className="text-center vesselName">
          <h2>Searching for berths...selected vessel details:</h2>
        </Col>
      </Row>
      <Row>
        <Col className="text-center vesselName">Name: {name}</Col>
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
    </Container>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  vessel: state.vessels.vessel,
});

BerthSearchPage.propTypes = {
  vessel: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, {})(BerthSearchPage);
