import * as APIUtil from '../util/collection_api_util';
import { receiveErrors } from './error_actions';

export const RECEIVE_ALL_COLLECTIONS = 'RECEIVE_ALL_COLLECTIONS';
export const RECEIVE_COLLECTION = 'RECEIVE_COLLECTION';
export const REMOVE_COLLECTION = 'REMOVE_COLLECTION';
export const RECEIVE_NEW_COLLECTION = 'RECEIVE_NEW_COLLECTION';

export const fetchAllCollections = () => {
  return dispatch => {
    return APIUtil.fetchAllCollections()
        .then(collections => dispatch(receiveAllCollections(collections)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const fetchCollection = collectionTitle => {
  return dispatch => {
    return APIUtil.fetchCollection(collectionTitle)
        .then(collection => dispatch(receiveCollection(collection)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const createCollection = collection => {
  return dispatch => {
    return APIUtil.createCollection(collection)
        .then(newCollection => dispatch(receiveNewCollection(newCollection)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const updateCollection = collection => {
  return dispatch => {
    return APIUtil.updateCollection(collection)
        .then(editCollection => dispatch(receiveCollection(editCollection)),
          errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const deleteCollection = collectionId => {
  return dispatch => {
    return APIUtil.deleteCollection(collectionId)
      .then(collection => dispatch(removeCollection(collection)),
            errors => dispatch(receiveErrors(errors.responseJSON)));
  };
};

export const receiveAllCollections = collections => {
  return {
    type: RECEIVE_ALL_COLLECTIONS,
    collections,
  };
};

export const receiveCollection = collection => {
  return {
    type: RECEIVE_COLLECTION,
    collection,
  };
};

export const receiveNewCollection = collection => {
  return {
    type: RECEIVE_NEW_COLLECTION,
    collection,
  };
};

export const removeCollection = collection => {
  return {
    type: REMOVE_COLLECTION,
    collection,
  };
};
