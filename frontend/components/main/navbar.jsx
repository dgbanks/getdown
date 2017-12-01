import React from 'react';
import { Link } from 'react-router-dom';
import SessionLinksContainer from './session_links_container';
import DashboardMenuContainer from './dashboard_menu_container';

class NavBar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pathname: window.location.href
    };

  }

  componentWillReceiveProps(newProps) {
    console.log('NavBar.componentWillReceiveProps: newProps=', newProps);
    if (window.location.href.split('/').includes('groups')) {
      this.setState({
        pathname: window.location.href
      });
    }
  }

  getSessionLinks(currentUser) {
    if (currentUser) {
      return <DashboardMenuContainer
        categories={this.props.categories}
        pathname={this.state.pathname} />;
    } else {
      return <SessionLinksContainer categories={this.props.categories} />;
    }
  }

  render() {
    return (
      <nav className='navbar'>
        <div className='logo'>
          <Link to='/' style={{
            color: '#FF0B55',
            fontSize: '50px',
            fontFamily: 'cursive',
            fontWeight: 'bold',
            textDecoration: 'none'}}>
            <h1>getdown</h1>
            </Link>
          </div>

          <div className='session-links'>
            {this.getSessionLinks(this.props.currentUser)}
          </div>
        </nav>
    );
  }
}

export default NavBar;
