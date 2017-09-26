import React from 'react';
import { Link } from 'react-router-dom';
import { joinGroup } from '../../actions/user_actions';
import EventIndexContainer from '../event_index/event_index_container';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleJoinGroup = this.handleJoinGroup.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId);
  }

  handleJoinGroup() {
    this.props.joinGroup(this.props.match.params.groupId);
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
          <button onClick={this.handleJoinGroup}>Join Group</button>
        </div>

        <br/>

        <div className='show-main'>
          <div className='left-nav'>

            <div className='left-content'>
              <br/>
              <h3>Location:</h3>
              <h1>{group.location}</h1>
              <br/>
              <h3>Organizer:</h3>
              <h1>{group.organizer.name}</h1>
              <br/>
              <h3>Members</h3>
              <br/>
              <h3>Calendar</h3>
              <br/>
            </div>

          </div>
          <br/>
          <div className='group-event-index'>
            <EventIndexContainer />
          </div>
        </div>
      </div>
    );

  }
}

export default GroupShow;
