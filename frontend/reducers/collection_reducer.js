import {
  RECEIVE_ALL_COLLECTIONS,
  RECEIVE_COLLECTION,
  REMOVE_COLLECTION
} from '../actions/collection_actions';

const collectionReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_COLLECTIONS:
      return action.collections;
    case RECEIVE_COLLECTION:
      return action.collection;
    case REMOVE_COLLECTION:
      Object.assign(newState, state);
      delete newState[action.collection.id];
      return newState;
    default:
      return state;
  }
};

export default collectionReducer;
