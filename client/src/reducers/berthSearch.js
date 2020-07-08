import {
  CREATE_VESSEL,
  GET_VESSEL,
  GET_VESSELS,
  UPDATE_VESSEL,
  DELETE_VESSEL,
  TOGGLE_VESSELS_LOADING,
  TOGGLE_VESSEL_LOADING,
  RESET_VESSEL,
  GET_BOOKED,
  TOGGLE_BOOKED_LOADING,
} from '../actions/types';

const initialState = {
  booked: [],
  bookedLoading: false,
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
        booked: [...action.payload],
      };
    case GET_BOOKED:
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
    case TOGGLE_BOOKED_LOADING:
      return {
        ...state,
        bookedLoading: !state.bookedLoading,
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
