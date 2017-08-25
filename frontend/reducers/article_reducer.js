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
  switch(action.type) {
    case RECEIVE_ALL_ARTICLES:
      return action.articles;
    case RECEIVE_ARTICLE:
      return action.article;
    default:
      return state;
  }
};

export default articleReducer;
