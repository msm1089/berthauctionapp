import React from 'react';
import PropTypes from 'prop-types';
import Progress from '../../components/layout/Progress';
import { connect } from 'react-redux';

const ProgressBar = ({ loading }) => {
  return loading ? <Progress /> : <div />;
};

const mapStateToProps = (state) => ({
  loading:
    state.auth.userLoading ||
    state.vessels.vesselLoading ||
    state.vessels.vesselsLoading,
});

ProgressBar.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(ProgressBar);
