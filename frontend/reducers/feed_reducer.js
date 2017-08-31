import {
  RECEIVE_ALL_FEEDS,
  RECEIVE_FEED,
} from '../actions/feed_actions';

const feedReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_ALL_FEEDS:
      return action.feeds;
    case RECEIVE_FEED:
      Object.assign(newState, state, { [action.feed.id]: action.feed });
      return newState;
    default:
      return state;
  }
};

export default feedReducer;
