import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBarContainer from './main/navbar_container';
// import SessionFormContainer from './session_form/session_form_container';
// import GroupIndexContainer from './group_index/group_index_container';
import GroupShowContainer from './group/group_show_container';
import EventShowContainer from './event/event_show_container';
// import EventIndexContainer from './event_index/event_index_container';
import CategoryShowContainer from './category/category_show_container';
import Homepage from './main/homepage';
import DiscoverContainer from './main/discover_container';
import FooterContainer from './main/footer_container';

const App = () => (
  <div>

    <header>
      <NavBarContainer />
    </header>

    <main>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/discover/groups' component={DiscoverContainer}/>
        <Route path='/discover/events' component={DiscoverContainer}/>
        <Route path='/discover/categories/:categoryId/groups' component={DiscoverContainer}/>
        <Route path='/discover/categories/:categoryId/events' component={DiscoverContainer}/>
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
