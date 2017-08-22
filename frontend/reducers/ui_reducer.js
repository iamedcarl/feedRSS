import { combineReducers } from 'redux';
import errors from './errors_reducer';

const uiReducer = combineReducers({
  errors,
});

export default uiReducer;
