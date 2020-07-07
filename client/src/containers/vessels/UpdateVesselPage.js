import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import VesselForm from '../../components/vessels/VesselForm';
import Validate from '../../components/form/Validate';
import { connect } from 'react-redux';
import { getVesselByID, updateVessel } from '../../actions/vesselActions';

const UpdateVesselPage = ({
  errors,
  updateVessel,
  loading,
  currentVessel,
  getVesselByID,
  match,
  history,
}) => {
  const [vessel, setVessel] = useState({
    name: '',
    description: '',
    length: '',
    weight: '',
    depth: '',
    errors: {},
  });

  useEffect(() => {
    getVesselByID(match.params.id);
  }, [match, getVesselByID]);

  // updating the local state of vessel with the received vessel data
  useEffect(() => {
    setVessel((vessel) => ({
      name: currentVessel.name,
      description: currentVessel.description,
      length: currentVessel.length,
      weight: currentVessel.weight,
      depth: currentVessel.depth,
      errors: { ...vessel.errors },
    }));
  }, [currentVessel]);

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
    updateVessel(
      currentVessel._id,
      { name, description, length, weight, depth },
      history
    );
  };

  // to ensure that the vessel is loaded otherwise we would make uncontrolled form access error
  const isVesselLoaded = () => {
    return vessel.name || Object.keys(vessel.errors).length > 0;
  };

  return isVesselLoaded() ? (
    <VesselForm
      loading={loading}
      vessel={vessel}
      onChange={handleChange}
      onBlur={handleBlur}
      onSubmit={handleSubmit}
    />
  ) : (
    <div />
  );
};

const mapStateToProps = (state) => ({
  currentVessel: state.vessels.vessel,
  loading: state.vessels.vesselLoading,
  errors: state.errors,
});

UpdateVesselPage.propTypes = {
  currentVessel: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  errors: PropTypes.object.isRequired,
  getVesselByID: PropTypes.func.isRequired,
  updateVessel: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getVesselByID, updateVessel })(
  UpdateVesselPage
);
