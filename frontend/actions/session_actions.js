import * as APIUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const signup = user => {
  return dispatch => {
    return APIUtil.signup(user)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
        errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const login = user => {
  return dispatch => {
    return APIUtil.login(user)
      .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
        errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const logout = () => {
  return dispatch => {
    return APIUtil.logout()
      .then(() => dispatch(receiveCurrentUser(resetUser)),
        errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const receiveCurrentUser = user => {
  return({
    type: RECEIVE_CURRENT_USER,
    user,
  });
};

const resetUser = {
  username: '',
  fname: '',
  lname: '',
  img_url: '',
};
