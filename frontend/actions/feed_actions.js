import * as APIUtil from '../util/feed_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_ALL_FEEDS = 'RECEIVE_ALL_FEEDS';
export const RECEIVE_FEED = 'RECEIVE_FEED';
export const REMOVE_FEED = 'REMOVE_FEED';

export const fetchAllFeeds = () => {
  return dispatch => {
    return APIUtil.fetchAllFeeds()
        .then(feeds => dispatch(receiveAllFeeds(feeds)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const fetchFeed = feedId => {
  return dispatch => {
    return APIUtil.fetchFeed(feedId)
        .then(feed => dispatch(receiveFeed(feed)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const createFeed = feed => {
  return dispatch => {
    return APIUtil.fetchFeeds(feed)
        .then(newFeed => dispatch(receiveFeed(newFeed)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const deleteFeed = feedId => {
  return dispatch => {
    return APIUtil.deleteFeed(feedId)
      .then(feed => dispatch(removeFeed(feed)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const receiveAllFeeds = feeds => {
  return {
    type: RECEIVE_ALL_FEEDS,
    feeds,
  };
};

export const receiveFeed = feed => {
  return {
    type: RECEIVE_FEED,
    feed,
  };
};

export const removeFeed = feed => {
  return {
    type: REMOVE_FEED,
    feed,
  };
};
