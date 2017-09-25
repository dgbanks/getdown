import React from 'react';
import { Link } from 'react-router-dom';
import { joinGroup } from '../../actions/user_actions';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const group = this.props.group;
    return (
      <div className='show-header-container'>
        <div className='show-header'>
          <h3>{group.name}</h3>
          <p>{group.description}</p>
          <button onClick={joinGroup}>Join Group</button>
        </div>
      </div>
    );
  }
}

export default GroupShow;
