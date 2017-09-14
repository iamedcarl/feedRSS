import * as APIUtil from '../util/article_api_util';
import { receiveErrors } from './error_actions';
import { startLoading } from './loading_actions';

export const RECEIVE_ALL_ARTICLES = 'RECEIVE_ALL_ARTICLES';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const RECEIVE_SAVED_ARTICLE = 'RECEIVE_SAVED_ARTICLE';
export const RECEIVE_UNSAVED_ARTICLE = 'RECEIVE_UNSAVED_ARTICLE';

export const fetchAllArticles = () => {
  return dispatch => {
    dispatch(startLoading());
    return APIUtil.fetchAllArticles()
      .then(articles => dispatch(receiveAllArticles(articles)),
        errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const fetchArticle = articleId => {
  return dispatch => {
    return APIUtil.fetchArticle(articleId)
      .then(article => dispatch(receiveArticle(article)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const fetchArticlesByFeed = feedId => {
  return dispatch => {
    dispatch(startLoading());
    return APIUtil.fetchArticlesByFeed(feedId)
      .then(articles => dispatch(receiveAllArticles(articles)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const fetchArticlesByCollection = collectionId => {
  return dispatch => {
    dispatch(startLoading());
    return APIUtil.fetchArticlesByCollection(collectionId)
      .then(articles => dispatch(receiveAllArticles(articles)),
      errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const saveArticle = article => {
  return dispatch => {
    return APIUtil.updateArticle(article)
      .then(savedArticle => dispatch(receiveSavedArticle(savedArticle)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const unsaveArticle = article => {
  return dispatch => {
    return APIUtil.updateArticle(article)
      .then(savedArticle => dispatch(receiveUnsavedArticle(savedArticle)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const receiveAllArticles = articles => {
  return {
    type: RECEIVE_ALL_ARTICLES,
    articles,
  };
};


export const receiveArticle = article => {
  return {
    type: RECEIVE_ARTICLE,
    article,
  };
};

export const receiveSavedArticle = article => {
  return {
    type: RECEIVE_SAVED_ARTICLE,
    article,
  };
};

export const receiveUnsavedArticle = article => {
  return {
    type: RECEIVE_UNSAVED_ARTICLE,
    article,
  };
};
