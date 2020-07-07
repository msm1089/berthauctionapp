import { combineReducers } from 'redux';
import authReducer from './authReducers';
import errorReducer from './errorReducers';
//import postReducer from './vesselReducer';
import vesselReducer from './vesselReducer';

export default combineReducers({
  auth: authReducer,
  //post: postReducer,
  errors: errorReducer,
  vessels: vesselReducer,
});
