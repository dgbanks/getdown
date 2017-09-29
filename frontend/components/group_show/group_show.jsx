import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexContainer from '../event_index/event_index_container';
import EventFormContainer from '../event_form/event_form_container';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleJoinGroup = this.handleJoinGroup.bind(this);
    this.eventButton = this.eventButton.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId);
  }

  handleJoinGroup() {
    if (this.props.currentUser) {
      this.props.joinGroup(this.props.group.id);
    } else {
      this.props.toggleModal();
    }
  }

  eventButton() {
    if (this.props.currentUser) {
      return (
        <button onClick={this.getEventForm}>Create Event</button>
      );
    }
  }

  getEventForm() {
    <EventFormContainer />
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
              <h1>{group.member_count}</h1>
              <br/>
              <button onClick={this.getEventForm}>Create Event</button>
            </div>

          </div>
          <br/>
          <div className='show-details'>
            <EventIndexContainer />
          </div>
        </div>
      </div>
    );

  }
}

export default GroupShow;
