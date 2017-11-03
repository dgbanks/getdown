import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import { configureStore } from './store/store';

// testing
// import * as SessionApiUtil from './util/session_api_util';
// import { signup, login, logout } from './actions/session_actions';
// window.signup = signup;
// window.login = login;
// window.logout = logout;
// testing


document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // testing
  // window.getState = store.getState;
  // window.dispatch = store.dispatch;
  //testing

  const root = document.getElementById('root');
  // ReactDOM.render(<h1>Welcome to getdown</h1>, root);
  ReactDOM.render(<Root store={store}/>, root);
});
