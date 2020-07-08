import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AdditionalVesselDetails from '../../components/berthSearch/AdditionalVesselDetails';
import BerthSchedule from '../../components/berthSearch/BerthSchedule';
import BerthSearchControls from '../../components/berthSearch/BerthSearchControls';

const BerthSearchPage = ({ isAuthenticated, match, vessel }) => {
  return (
    <>
      <AdditionalVesselDetails />
      <BerthSchedule />
      <BerthSearchControls />
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
};

export default connect(mapStateToProps, {})(BerthSearchPage);
