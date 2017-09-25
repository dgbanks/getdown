import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './xyz';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <App></App>
    </HashRouter>
  </Provider>
);

export default Root;
