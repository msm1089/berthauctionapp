import {
  CREATE_VESSEL,
  GET_VESSEL,
  GET_VESSELS,
  UPDATE_VESSEL,
  DELETE_VESSEL,
  TOGGLE_VESSELS_LOADING,
  TOGGLE_VESSEL_LOADING,
  RESET_VESSEL,
} from '../actions/types';

const initialState = {
  vessel: {},
  vessels: [],
  vesselLoading: false,
  vesselsLoading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_VESSEL:
      return {
        ...state,
        vessels: [...state.vessels, action.payload],
      };
    case GET_VESSELS:
      return {
        ...state,
        vessel: {},
        vessels: [...action.payload],
      };
    case GET_VESSEL:
      return {
        ...state,
        vessel: { ...action.payload[0] },
      };
    case UPDATE_VESSEL:
      const vessels = state.vessels.filter(
        (vessel) => vessel._id !== action.payload._id
      );
      return {
        ...state,
        vessel: {},
        vessels: [...vessels, action.payload],
      };

    case DELETE_VESSEL:
      return {
        ...state,
        vessels: state.vessels.filter(
          (vessel) => vessel._id !== action.payload
        ),
      };
    case TOGGLE_VESSEL_LOADING:
      return {
        ...state,
        vesselLoading: !state.vesselLoading,
      };
    case TOGGLE_VESSELS_LOADING:
      return {
        ...state,
        vesselsLoading: !state.vesselsLoading,
      };
    case RESET_VESSEL:
      return initialState;
    default:
      return state;
  }
}
