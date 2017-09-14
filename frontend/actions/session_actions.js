import * as APIUtil from '../util/session_api_util';
import { receiveErrors } from './error_actions';
import { receiveAllArticles } from './article_actions';
import { startLoading } from './loading_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT = 'LOGOUT';

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
      .then(() => dispatch(logoutUser()),
        errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const fetchUser = () => {
  return dispatch => {
    return APIUtil.fetchUser()
      .then(user => dispatch(receiveCurrentUser(user)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const fetchSavedArticles = () => {
  return dispatch => {
    return APIUtil.fetchSavedArticles()
      .then(articles => dispatch(receiveAllArticles(articles)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const receiveCurrentUser = user => {
  return({
    type: RECEIVE_CURRENT_USER,
    user,
  });
};

export const logoutUser = () => {
  return({
    type: LOGOUT,
  });
};
