import { START_LOADING } from '../actions/loading_actions';
import { RECEIVE_ERRORS } from '../actions/error_actions';

import { RECEIVE_ALL_ARTICLES } from '../actions/article_actions';


const initialState = {
  pageLoading: false,
};

const LoadingReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_ALL_ARTICLES:
    case RECEIVE_ERRORS:
      return Object.assign({}, state, { pageLoading: false });
    case START_LOADING:
      return Object.assign({}, state, { pageLoading: true });
    default:
      return state;
  }
};

export default LoadingReducer;
