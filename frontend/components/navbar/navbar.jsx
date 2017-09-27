import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';

const getSessionLinks = (currentUser, logout) => (
  <div className='session-links'>
    { currentUser ? (
      personalGreeting(currentUser, logout)
    ) : (
      <SessionFormContainer />
    )}
  </div>
);

const personalGreeting = (currentUser, logout) => (
  <div className='user-greeting'>
    <h2>{currentUser.name}</h2>
    <button onClick={logout}>Logout</button>
  </div>
);

const NavBar = ({currentUser, logout}) => (
  <nav className='navbar'>
    <div className='logo'>
      <Link to='/' style={{color: 'white', textDecoration: 'none'}}>
        <h1>getdown</h1>
      </Link>
    </div>
    {getSessionLinks(currentUser, logout)}
  </nav>
);

export default NavBar;
