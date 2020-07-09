import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BerthSearchControls = () => {
  return (
    
    <Link to="/summary">
      <Button variant="outline-light" className="mr-sm-2">
        Book Berth
      </Button>
    </Link>
  );
};

export default BerthSearchControls;
