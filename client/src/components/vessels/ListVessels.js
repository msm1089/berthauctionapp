import React from 'react';
import { Link } from 'react-router-dom';
import Vessel from './Vessel';
import PropTypes from 'prop-types';
import './vessel.scss';

const ListVessels = ({ vessels }) => {
  return (
    <div className="grid-container mx-3">
      {vessels.map((vessel) => (
        <Link to={`/vessels/vessel/${vessel._id}`} key={vessel._id}>
          <Vessel vessel={vessel} />
        </Link>
      ))}
    </div>
  );
};

ListVessels.propTypes = {
  vessels: PropTypes.array.isRequired,
};

export default ListVessels;
