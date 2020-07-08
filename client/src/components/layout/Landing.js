import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import mongo from '../../static/mongo.png';
import express from '../../static/express.png';
import react from '../../static/react.png';
import node from '../../static/node.png';

import logo from '../../BigBerthaLogo.png';
import './Landing.css';

const Landing = () => (
  <Container
    style={{ height: '75vh' }}
    className="d-flex flex-column justify-content-center align-items-center"
  >
    {' '}
    <Row className="mb-4">
      <p className="text-secondary h3"> Berth Booking Application</p>
    </Row>
    <Row>
      <img src={logo} alt='Team Logo' className="img-fluid" style={{width:"630px",height:"472px"}}/>
    </Row>
  </Container>
);

export default Landing;
