import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/error_actions';
import { RECEIVE_ALL_ARTICLES, RECEIVE_ARTICLE } from '../actions/article_actions';

const errorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ERRORS:
      return [...action.errors];
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_ERRORS:
      return [];
    case RECEIVE_ALL_ARTICLES:
      return [];
    case RECEIVE_ARTICLE:
      return [];
    default:
      return state;
  }
};

export default errorsReducer;
