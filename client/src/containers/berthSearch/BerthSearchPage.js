import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdditionalVesselDetails from '../../components/berthSearch/AdditionalVesselDetails';
import BerthSchedule from '../../components/berthSearch/BerthSchedule';
import BerthSearchControls from '../../components/berthSearch/BerthSearchControls';
import { getBooked } from '../../actions/berthSearchActions';

const BerthSearchPage = ({ isAuthenticated, match, getBooked, vessel }) => {
  const [booked, setBooked] = useState([]);

  useEffect(() => {
    setBooked(getBooked());
  }, [booked, getBooked]);

  const onBerthChosen = () => console.log('You clicked Continue!');

  // to ensure that the booked array is loaded otherwise we would make uncontrolled form access error
  const isBookedLoaded = () => {
    return booked.length > 0;
  };

  return (
    <>
      <AdditionalVesselDetails vessel={vessel} />
      <BerthSchedule booked={booked} />
      <BerthSearchControls onBerthChosen={onBerthChosen} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  vessel: state.vessels.vessel,
});

BerthSearchPage.propTypes = {
  vessel: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  getBooked: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getBooked })(BerthSearchPage);
