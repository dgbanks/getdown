import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './navbar/navbar_container';
// import SessionFormContainer from './session_form/session_form_container';
// import GroupIndexContainer from './group_index/group_index_container';
import GroupShowContainer from './group_show/group_show_container';
import EventShowContainer from './event_show/event_show_container';
// import EventIndexContainer from './event_index/event_index_container';
import CategoryShowContainer from './category_show/category_show_container';
import Homepage from './homepage';
import Discover from './discover';
import FooterContainer from './footer/footer_container';

const App = () => (
  <div>

    <header>
      <NavBarContainer />
    </header>

    <main>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/discover/groups' component={Discover}/>
        <Route path='/discover/events' component={Discover}/>
        <Route path='/discover/categories/:categoryId/groups' component={Discover}/>
        <Route path='/discover/categories/:categoryId/events' component={CategoryShowContainer}/>
        <Route path='/groups/:groupId' component={GroupShowContainer}/>
        <Route path='/groups/:groupId/events' component={GroupShowContainer}/>
        <Route path='/events/:eventId' component={EventShowContainer}/>
      </Switch>
    </main>

    <footer>
      <FooterContainer />
    </footer>

  </div>
);

export default App;
