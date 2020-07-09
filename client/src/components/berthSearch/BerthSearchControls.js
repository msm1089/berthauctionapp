import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const BerthSearchControls = () => {
  return (
    <Link to="/summary">
      <Button className="mr-2" variant="outline-success">
        Continue
      </Button>
    </Link>
  );
};

export default BerthSearchControls;
