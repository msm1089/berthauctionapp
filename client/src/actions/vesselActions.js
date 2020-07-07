import axios from 'axios';
import {
  CREATE_VESSEL,
  GET_VESSEL,
  GET_VESSELS,
  UPDATE_VESSEL,
  DELETE_VESSEL,
  TOGGLE_VESSELS_LOADING,
  TOGGLE_VESSEL_LOADING,
  RESET_VESSEL,
} from './types';

import { setErrors, clearErrors } from './errorActions';

export const createVessel = (vesselData, history) => (dispatch) => {
  dispatch(toggleVesselLoading());
  axios
    .post('/api/vessels/create', vesselData)
    .then((res) => {
      dispatch({
        type: CREATE_VESSEL,
        payload: res.data,
      });
      dispatch(toggleVesselLoading());
      history.push('/vessels');
    })
    .catch((err) => {
      dispatch(setErrors(err.response.data));
      dispatch(toggleVesselLoading());
    });
};

export const getVesselByID = (id) => (dispatch) => {
  dispatch(toggleVesselLoading());
  axios
    .get(`/api/vessels/vessel/${id}`)
    .then((res) => {
      dispatch({
        type: GET_VESSEL,
        payload: res.data,
      });
      dispatch(clearErrors());
      dispatch(toggleVesselLoading());
    })

    .catch((err) => {
      dispatch(setErrors(err.response.data));
      dispatch(toggleVesselLoading());
    });
};

export const getVesselsByOperator = (operator) => (dispatch) => {
  dispatch(toggleVesselsLoading());
  axios
    .get(`/api/vessels/operator/${operator}`)
    .then((res) => {
      dispatch({
        type: GET_VESSELS,
        payload: res.data,
      });
      dispatch(toggleVesselsLoading());
    })
    .catch((err) => {
      dispatch(setErrors(err.response.data));
      dispatch(toggleVesselsLoading());
    });
};

export const getVessels = () => (dispatch) => {
  dispatch(toggleVesselsLoading());
  axios
    .get('/api/vessels/')
    .then((res) => {
      dispatch({
        type: GET_VESSELS,
        payload: res.data,
      });
      dispatch(clearErrors());
      dispatch(toggleVesselsLoading());
    })
    .catch((err) => {
      dispatch(setErrors(err.response.data));
      dispatch(toggleVesselsLoading());
    });
};

export const updateVessel = (id, vesselData, history) => (dispatch) => {
  dispatch(toggleVesselLoading());
  axios
    .patch(`/api/vessels/update/${id}`, vesselData)
    .then((res) => {
      dispatch({
        type: UPDATE_VESSEL,
        payload: res.data,
      });
      dispatch(toggleVesselLoading());
      history.push(`/vessels/vessel/${res.data._id}`);
    })
    .catch((err) => {
      dispatch(setErrors(err.response.data));
      dispatch(toggleVesselLoading());
    });
};

export const deleteVessel = (id, history) => (dispatch) => {
  dispatch(toggleVesselLoading());
  axios
    .delete(`/api/vessels/delete/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_VESSEL,
        payload: id,
      });
      dispatch(toggleVesselLoading());
      history.push('/vessels');
    })
    .catch((err) => {
      dispatch(setErrors(err.response.data));
      dispatch(toggleVesselLoading());
    });
};

export const resetVessel = () => {
  return {
    type: RESET_VESSEL,
  };
};

export const toggleVesselLoading = () => {
  return {
    type: TOGGLE_VESSEL_LOADING,
  };
};

export const toggleVesselsLoading = () => {
  return {
    type: TOGGLE_VESSELS_LOADING,
  };
};
