import React from 'react';
import { Link } from 'react-router-dom';
import SessionLinksContainer from '../session_links/session_links_container';
import DashboardMenuContainer from '../dashboard_menu/dashboard_menu_container';

const getSessionLinks = (currentUser) => (
  <div className='session-links'>
    { currentUser ? (
      <DashboardMenuContainer />
    ) : (
      <SessionLinksContainer />
    )}
  </div>
);

const NavBar = ({currentUser}) => (
  <nav className='navbar'>
    <div className='logo'>
      <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
        <h1>getdown</h1>
      </Link>
    </div>
    {getSessionLinks(currentUser)}
  </nav>
);

export default NavBar;
