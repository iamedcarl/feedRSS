import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import { RECEIVE_NEW_COLLECTION } from '../actions/collection_actions';

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
    case RECEIVE_NEW_COLLECTION:
      Object.assign(newState, state);
      newState.collection_ids = newState
                                  .collection_ids
                                  .concat(action.collection.id);
      return newState;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default sessionReducer;
