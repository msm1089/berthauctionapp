import React, { useEffect } from 'react';
import ViewVessel from '../../components/vessels/ViewVessel';
import { deleteVessel, getVesselByID } from '../../actions/vesselActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ViewVesselPage = ({
  auth,
  vessel,
  match,
  history,
  getVesselByID,
  deleteVessel,
}) => {
  useEffect(() => {
    getVesselByID(match.params.id);
  }, [match, getVesselByID]);

  const handleEdit = () => {
    history.push(`/vessels/vessel/update/${vessel._id}`);
  };

  const handleDelete = () => {
    deleteVessel(vessel._id, history);
  };

  const handleFindBerth = () => {
    history.push(`/search/${vessel._id}`);
  };

  if (Object.keys(vessel).length === 0) return <div />;
  return (
    <ViewVessel
      vessel={vessel}
      auth={auth}
      onFindBerth={handleFindBerth}
      onDelete={handleDelete}
      onEdit={handleEdit}
    />
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth.isAuthenticated,
  vessel: state.vessels.vessel,
});

ViewVesselPage.propTypes = {
  auth: PropTypes.bool.isRequired,
  vessel: PropTypes.object.isRequired,
  getVesselByID: PropTypes.func.isRequired,
  deleteVessel: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getVesselByID, deleteVessel })(
  ViewVesselPage
);
