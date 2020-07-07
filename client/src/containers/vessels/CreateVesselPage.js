import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VesselForm from '../../components/vessels/VesselForm';
import Validate from '../../components/form/Validate';
import { connect } from 'react-redux';
import { createVessel } from '../../actions/vesselActions';

const CreateVesselPage = ({ errors, createVessel, loading, history }) => {
  const [vessel, setVessel] = useState({
    name: '',
    description: '',
    length: '',
    weight: '',
    depth: '',
    errors: {},
  });

  useEffect(() => {
    setVessel((vessel) => {
      return { ...vessel, errors };
    });
  }, [errors]);

  const handleChange = (e) => {
    setVessel({
      ...vessel,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = { ...vessel.errors, ...Validate(name, value).errors };
    setVessel({ ...vessel, errors: { ...error } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, description, length, weight, depth } = vessel;
    createVessel({ name, description, length, weight, depth }, history);
  };

  return (
    <VesselForm
      loading={loading}
      vessel={vessel}
      onChange={handleChange}
      onBlur={handleBlur}
      onSubmit={handleSubmit}
    />
  );
};

const mapStateToProps = (state) => ({
  loading: state.vessels.vesselLoading,
  errors: state.errors,
});

CreateVesselPage.propTypes = {
  createVessel: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { createVessel })(CreateVesselPage);
