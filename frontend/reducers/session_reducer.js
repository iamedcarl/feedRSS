import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

const initialState = {
  id: null,
  username: '',
  fname: '',
  lname: '',
  img_url: '',
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    default:
      return state;
  }
};

export default sessionReducer;
