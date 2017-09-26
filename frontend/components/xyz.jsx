import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import GroupIndexContainer from './group_index/group_index_container';
import GroupShowContainer from './group_show/group_show_container';
import EventShowContainer from './event_show/event_show_container';
import EventIndexContainer from './event_index/event_index_container';

const App = () => (
  <div>

    <header>
      <NavBarContainer />
    </header>

    <main>
      <Switch>
        <Route exact path='/' component={EventIndexContainer}/>
        <Route path='/groups/:groupId' component={GroupShowContainer}/>
        <Route path='/events/:eventId' component={EventShowContainer}/>
      </Switch>
    </main>

  </div>
);

export default App;
