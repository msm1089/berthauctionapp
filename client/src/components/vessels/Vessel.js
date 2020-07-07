import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import getFormattedDate from '../../utils/getFormattedDate';
import './vessel.scss';

const Vessel = ({ vessel }) => {
  const { name, length, weight, depth, date } = vessel;
  const addedDate = getFormattedDate(date);

  return (
    <Card className="deckStyle" style={{ border: 'none' }}>
      <Card.Body className="vesselCover">
        <Card.Title className="text-center p-5">{name}</Card.Title>
        <Card.Text>Length: {length}</Card.Text>
        <Card.Text>Weight: {weight}</Card.Text>
        <Card.Text>Depth: {depth}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Added on: {addedDate}</small>
      </Card.Footer>
    </Card>
  );
};

Vessel.propTypes = {
  vessel: PropTypes.object.isRequired,
};

export default Vessel;
