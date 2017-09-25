import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import GroupIndexContainer from './group_index/group_index_container';
import GroupShowContainer from './group_show/group_show_container';

const App = () => (
  <div>
    <header>
      <NavBarContainer />
    </header>
    <main>
      <GroupIndexContainer />
      <switch>
        <Route path='/login' component={GroupIndexContainer}/>
        <Route path='/groups/:groupId' component={GroupShowContainer}/>
      </switch>
    </main>

  </div>
);

export default App;
