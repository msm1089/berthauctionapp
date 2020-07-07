import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Vessels from '../components/user/Vessels';
import { getVessels, getVesselsByOperator } from '../actions/vesselActions';

const VesselsPage = ({
  isAuthenticated,
  getVesselsByOperator,
  getVessels,
  match,
  vessels,
}) => {
  useEffect(() => {
    isAuthenticated
      ? getVessels()
      : getVesselsByOperator(match.params.operator);
  }, [isAuthenticated, getVessels, getVesselsByOperator, match]);

  return <Vessels vessels={vessels} auth={isAuthenticated} />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  vessels: state.vessels.vessels,
});

VesselsPage.propTypes = {
  vessels: PropTypes.array.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  getVessels: PropTypes.func.isRequired,
  getVesselsByOperator: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, {
  getVesselsByOperator,
  getVessels,
})(VesselsPage);
