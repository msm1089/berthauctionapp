import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Nav, Button, Container, Form } from 'react-bootstrap';
import ListVessels from '../vessels/ListVessels';
import './vessel.scss';

const Vessels = ({ vessels, auth }) => {
  const inputRef = useRef(null);
  const [search, setSearch] = useState('');
  const [display, setDisplay] = useState(false);

  const handleChange = (e) => {
    setSearch(inputRef.current.value.toLowerCase());
  };

  // setting no vessel found after waiting for a second
  useEffect(() => {
    setTimeout(() => {
      if (vessels.length === 0) setDisplay(true);
    }, 1000);
  }, [vessels]);

  return (
    <React.Fragment>
      <div className="mx-3">
        <Nav className="justify-content-between mt-2 mb-2">
          {auth && (
            <Link to="/vessels/vessel/create">
              <Button variant="light" className="styleBtn">
                +
              </Button>
            </Link>
          )}
          <Form>
            <Form.Group controlId="searchBar">
              <Form.Control
                type="text"
                placeholder="Search Vessels..."
                style={{ height: 40 }}
                ref={inputRef}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Nav>
      </div>
      {vessels.length > 0 ? (
        <ListVessels
          vessels={vessels.filter((vessel) =>
            vessel.name.toLowerCase().includes(search)
          )}
        />
      ) : (
        display && (
          <Container
            style={{ height: '50vh' }}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            {' '}
            <p className="text-secondary h3">No Vessels Found!</p>
          </Container>
        )
      )}
    </React.Fragment>
  );
};

Vessels.propTypes = {
  auth: PropTypes.bool.isRequired,
  vessels: PropTypes.array.isRequired,
};

export default Vessels;
