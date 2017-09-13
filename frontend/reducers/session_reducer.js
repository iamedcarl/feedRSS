import { RECEIVE_CURRENT_USER, LOGOUT } from '../actions/session_actions';
import { RECEIVE_NEW_COLLECTION } from '../actions/collection_actions';
import {
  RECEIVE_SAVED_ARTICLE,
  RECEIVE_UNSAVED_ARTICLE
} from '../actions/article_actions';

const initialState = {
  username: '',
  fname: '',
  lname: '',
  img_url: '',
};

const sessionReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = {};
  let idx;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user;
    case RECEIVE_NEW_COLLECTION:
      Object.assign(newState, state);
      newState.collection_ids = newState
                                  .collection_ids
                                  .concat(action.collection.id);
      return newState;
    case RECEIVE_SAVED_ARTICLE:
      Object.assign(newState, state);
      newState.article_ids = newState.article_ids.concat(action.article.id);
      return newState;
    case RECEIVE_UNSAVED_ARTICLE:
      Object.assign(newState, state);
      idx = newState.article_ids.indexOf(action.article.id);
      newState.article_ids.splice(idx, 1);
      return newState;
    case LOGOUT:
      return {};
    default:
      return state;
  }
};

export default sessionReducer;
