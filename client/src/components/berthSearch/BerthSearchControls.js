import React from 'react';
import { Button } from 'react-bootstrap';

const BerthSearchControls = (onBerthChosen) => {
  return (
    <Button className="mr-2" variant="outline-success" onClick={onBerthChosen}>
      Find Berth
    </Button>
  );
};

export default BerthSearchControls;
