import React from 'react';
import Summary from '../../components/summary/Summary';
import PropTypes from 'prop-types';

const SummaryPage = (vessel, isAuthenticated) => {
  return <Summary vessel={vessel} auth={isAuthenticated} />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  vessel: state.vessels.vessel,
});

SummaryPage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  vessel: PropTypes.object.isRequired,
};

export default SummaryPage;
