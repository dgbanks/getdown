import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';

const App = () => (
  <div>
    <header>
      <h1>getdown</h1>
      <NavBarContainer />
    </header>
    <Switch>
    </Switch>
  </div>
);

export default App;
