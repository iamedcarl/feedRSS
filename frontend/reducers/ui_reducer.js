import { combineReducers } from 'redux';
import errors from './errors_reducer';
import loading from './loading_reducer';

const uiReducer = combineReducers({
  errors,
  loading,
});

export default uiReducer;
