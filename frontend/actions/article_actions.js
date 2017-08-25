import * as APIUtil from '../util/article_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_ALL_ARTICLES = 'RECEIVE_ALL_ARTICLES';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';

export const fetchAllArticles = () => {
  return dispatch => {
    return APIUtil.fetchAllArticles()
        .then(articles => dispatch(receiveAllArticles(articles)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const receiveAllArticles = articles => {
  debugger
  return {
    type: RECEIVE_ALL_ARTICLES,
    articles,
  };
};

export const fetchSingleArticles = () => {
  return dispatch => {
    return APIUtil.fetchSingleArticles()
        .then(article => dispatch(receiveArticle(article)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const receiveArticle = article => {
  return {
    type: RECEIVE_ARTICLE,
    article,
  };
};
