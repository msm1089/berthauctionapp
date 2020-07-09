import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import getFormattedDate from '../../utils/getFormattedDate';
import { Container, Row, Col, Button } from 'react-bootstrap';
import './summary.scss';

var length;

function pilot_charge(length, pilotage){
  let total = 0;
  let out = 0;
  if(length <= 48){
    //total += db.collection('costs').pilot_chargesp['costs']['48'];
    total += 245;
  }
  else if(length <= 70){
    //total += db.collection('costs').pilot_chargesp['costs']['70'];
    total += 348;
  }
  else if(length <= 90){
    //total += db.collection('costs').pilot_chargesp['costs']['90'];
    total += 515;
  }
  else if(length <= 110){
    //total += db.collection('costs').pilot_chargesp['costs']['110'];
    total += 611;
  }
  else if(length <= 130){
    //total += db.collection('costs').pilot_chargesp['costs']['130'];
    total += 661;
  }
  else if(length <= 150){
    //total += db.collection('costs').pilot_chargesp['costs']['150'];
    total += 719;
  }
  else if(length <= 170){
    //total += db.collection('costs').pilot_chargesp['costs']['170'];
    total += 777;
  }
  else if(length <= 220){
    //total += db.collection('costs').pilot_chargesp['costs']['220'];
    total += 848;
  }
  else if(length <= 270){
    //total += db.collection('costs').pilot_chargesp['costs']['270'];
    total += 914;
  }
  else{
    //total += db.collection('costs').pilot_chargesp['costs']['other'];
    total += 990;
  }

  if(pilotage){
    out = total;
  }
  
  else{

    if(length <= 80){
      out = total + 9.8;
    }

    else{
      out = total + 15;
    }
  }

  return out;
}

function dock_dues(length){
  let total = 0;
  if(length <= 50){
    //total += db.collection('costs').dock_dues['costs']['50'];
    total += 393;
  }
  else if(length <= 90){
    //total += db.collection('costs').dock_dues['costs']['90'];
    total += 458;
  }
  else if(length <= 100){
    //total += db.collection('costs').dock_dues['costs']['100'];
    total += 560;
  }
  else if(length <= 115){
    //total += db.collection('costs').dock_dues['costs']['115'];
    total += 698;
  }
  else if(length <= 145){
    //total += db.collection('costs').dock_dues['costs']['145'];
    total += 766;
  }
  else if(length <= 160){
    //total += db.collection('costs').dock_dues['costs']['160'];
    total += 882;
  }
  else if(length <= 180){
    //total += db.collection('costs').dock_dues['costs']['180'];
    total += 997;
  }
  else{
    //total += db.collection('costs').dock_dues['costs']['large'];
    total += 1113;
  }
  return total
}

function cargo_dues(commercial_small, commercial_large, car, caravan){
  let total = 0;

  //total += commercial_small * db.collection('costs').cargo_dues.veichles.commerical_small;
  total += commercial_small * 21.84; 
  //total += commercial_large * db.collection('costs').cargo_dues.veichles.commerical_large;
  total += commercial_large * 34.46;
  //total += car * db.collection('costs').cargo_dues.veichles.freight_car;
  total += car * 18.76;
  //total += caravan * db.collection('costs').cargo_dues.veichles.fraight_caravan;
  total += caravan * 25.86;

  total = Math.round((total + Number.EPSILON) * 100) / 100;
  return total;
}

function hourly_cost(length, hours){
  let total = 0;

  if(length <= 70){
    //total += (db.collection('costs').hourly_cost['costs']['70'] * hours);
    total += 100;
  }
  else if(length <= 100){
    //total += (db.collection('costs').hourly_cost['costs']['100'] * hours);
    total += 150;
  }
  else if(length <= 125){
    // total += (db.collection('costs').hourly_cost['costs']['125'] * hours);
    total += 250;
  }
  else if(length <= 180){
    //total += (db.collection('costs').hourly_cost['costs']['180'] * hours);
    total += 300;
  }
  else{
    total += 350;
  }

  return total * hours;
}

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
        <Col>Pilot charge: {pilot_charge(93, true)}</Col>
      </Row>
      <Row className="my-4" style={{ whiteSpace: 'pre-wrap' }}>
        <Col>Dock dues: {dock_dues(93)}</Col>
      </Row>
      <Row className="my-4" style={{ whiteSpace: 'pre-wrap' }}>
        <Col>Cargo dues: {cargo_dues(4,2,1,1)}</Col>
      </Row>
      <Row className="my-4" style={{ whiteSpace: 'pre-wrap' }}>
        <Col>Hourly charge: {hourly_cost(93,4)}</Col>
      </Row>
      <Row className="d-flex flex-column font-italic footerStyle">
        <Col>Total: {pilot_charge(93, true) + dock_dues(93) + hourly_cost(93,4) + cargo_dues(4,2,1,1)}</Col>
      </Row>
      {auth && (
        <Row className="mt-4">
          <Col className="text-center">
            <Button
              className="mr-2"
              variant="outline-success"
              onClick={() => console.log('button1')}
            >
              Confirm
            </Button>
            <Button
              className="mr-2"
              variant="outline-info"
              onClick={() => console.log('button2')}
            >
              Back
            </Button>
            <Button
              variant="outline-danger"
              onClick={() => console.log('button3')}
            >
              Cancel
            </Button>
          </Col>
        </Row>
      )}
    </Container>
  );
};

Summary.propTypes = {};

export default Summary;
