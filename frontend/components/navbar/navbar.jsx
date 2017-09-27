import React from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session_form/session_form_container';
import DashboardMenuContainer from '../dashboard_menu/dashboard_menu_container';

const getSessionLinks = (currentUser, logout) => (
  <div className='session-links'>
    { currentUser ? (
      // personalGreeting(currentUser, logout)
      <DashboardMenuContainer />
    ) : (
      <SessionFormContainer />
    )}
  </div>
);

// const personalGreeting = (currentUser, logout) => (
//   <div className='user-greeting'>
//     <h2>{currentUser.name}</h2>
//     <button onClick={logout}>Logout</button>
//   </div>
// );
//
// const dropdown = (currentUser, logout) => (
//   <div className="dropdown">
//     <button className="dropdown-button">{currentUser.name}</button>
//     <div className="dropdown-menu">
//       <ul>
//         <li><button className='dropdown-option' onClick={'/'}>Start a Group</button></li>
//         <li><button className='dropdown-option' onClick={'/'}>Your Groups</button></li>
//         <li><button className='dropdown-option' onClick={'/'}>Update Profile</button></li>
//         <li><button className='dropdown-option' onClick={logout}>Logout</button></li>
//       </ul>
//     </div>
//   </div>
// );

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
