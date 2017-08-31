import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';

const initialState = {
  username: '',
  fname: '',
  lname: '',
  img_url: '',
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default sessionReducer;
