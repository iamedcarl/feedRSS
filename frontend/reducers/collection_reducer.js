import {
  RECEIVE_ALL_COLLECTIONS,
  RECEIVE_COLLECTION,
  REMOVE_COLLECTION,
  RECEIVE_NEW_COLLECTION
} from '../actions/collection_actions';

import{ RECEIVE_UPDATED_FEED } from '../actions/feed_actions';

const collectionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch(action.type) {
    case RECEIVE_ALL_COLLECTIONS:
      return action.collections;
    case RECEIVE_COLLECTION:
      Object.assign(
        newState,
        state,
        { [action.collection.id]: action.collection }
      );
      return newState;
    case RECEIVE_NEW_COLLECTION:
      Object.assign(
        newState,
        state,
        { [action.collection.id]: action.collection }
      );
      return newState;
    case RECEIVE_UPDATED_FEED:
      Object.assign(newState, state);
      for(let props in newState) {
        newState[props].feed_ids.forEach((feedId, idx) => {
          if (action.feed.id === feedId) {
            newState[props].feed_ids.splice(idx,1);
          }
        });
      }
      return newState;
    case REMOVE_COLLECTION:
      Object.assign(newState, state);
      delete newState[action.collection.id];
      return newState;
    default:
      return state;
  }
};

export default collectionReducer;
