import {
  RECEIVE_ALL_ARTICLES,
  RECEIVE_ARTICLE
} from '../actions/article_actions';

const initialState = {
  title: '',
  content: '',
  date: '',
  url: '',
  viewed: false,
  image_url: '',
  feed_id: '',
};

const articleReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_ALL_ARTICLES:
      return action.articles;
    case RECEIVE_ARTICLE:
      Object.assign(newState, state, { [action.article.id]: action.article });
      return newState;
    default:
      return state;
  }
};

export default articleReducer;
