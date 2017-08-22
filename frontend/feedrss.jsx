import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

// TESTING
import { signup, login, logout, receiveCurrentUser, receiveErrors } from './actions/session_actions';
// TESTING END

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();

  // TESTING
  window.signup = signup;
  window.login = login;
  window.logout = logout;
window.receiveCurrentUser = receiveCurrentUser;
window.receiveErrors = receiveErrors;

  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
