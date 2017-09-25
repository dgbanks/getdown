import React from 'react';
import { Link } from 'react-router-dom';
import { joinGroup } from '../../actions/user_actions';
// import { fetchGroups } from '../../actions/group_actions';
import EventIndex from '../event_index/event_index';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId);
  }

  render () {
    const group = this.props.group;
    if (group === undefined) {
      return (
        <div>loading...</div>
      );
    }

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
