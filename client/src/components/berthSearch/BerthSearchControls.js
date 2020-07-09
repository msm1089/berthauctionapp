import React from 'react';
import { Button } from 'react-bootstrap';

const BerthSearchControls = (onBerthChosen) => {
  return (
    <Button className="d-flex w-75 text-center mx-auto my-4" variant="outline-success" onClick={onBerthChosen}>
      Find Berth
    </Button>
  );
};

export default BerthSearchControls;
