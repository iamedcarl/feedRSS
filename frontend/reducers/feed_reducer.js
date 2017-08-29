import {
  RECEIVE_ALL_FEEDS,
  RECEIVE_FEED,
  REMOVE_FEED
} from '../actions/feed_actions';

const feedReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_FEEDS:
      return action.feeds;
    case RECEIVE_FEED:
      return action.feed;
    case REMOVE_FEED:
      Object.assign(newState, state);
      delete newState[action.feed.id];
      return newState;
    default:
      return state;
  }
};

export default feedReducer;
