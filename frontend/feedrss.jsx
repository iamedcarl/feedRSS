import React from 'react';
import ReactDOM from 'react-dom';
// import configureStore from './store/store';
import Root from './components/root';

// TESTING
import { signup, login, logout } from './util/session_api_util';
// TESTING END

document.addEventListener('DOMContentLoaded', () => {
  // const store = configureStore();

  // TESTING
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // TESTING END

  const root = document.getElementById('root');
  ReactDOM.render(<Root  />, root);
});
