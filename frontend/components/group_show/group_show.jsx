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
      <div className='show-container'>
        <div className='show-header'>
          <h3>{group.name}</h3>
          <p>{group.description}</p>
          <button onClick={joinGroup}>Join Group</button>
        </div>

        <br/>

        <div className='show-main'>
          <div className='left-nav'>
            <br/>
            <h3>Location:</h3>
            <h1>{group.location}</h1>
            <br/>
            <h3>Organizer:</h3>
            <h1>{group.organizer.name}</h1>
            <br/>

          </div>
          <br/>
          <div className='event-index'>

          </div>
        </div>
      </div>
    );
  }
}

export default GroupShow;
