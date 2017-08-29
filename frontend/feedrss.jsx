import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import { fetchAllCollections } from './util/collection_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: window.currentUser };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.fetchAllCollections = fetchAllCollections;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
