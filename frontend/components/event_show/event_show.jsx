import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleJoinEvent = this.handleJoinEvent.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
  }

  handleJoinEvent() {
    if (this.props.currentUser) {
      this.props.joinEvent(this.props.event.id);
    } else {
      this.props.toggleModal();
    }
  }

  render() {
    const event = this.props.event;
    return (
      <div className='show-container'>
        <div className='show-header'>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <button onClick={this.handleJoinEvent}>I'm Down!</button>
        </div>

        <br/>

        <div className='show-main'>
          <div className='left-nav'>

            <div className='left-content'>

              <br/>

              <h3>Location:</h3>
              <h1>{event.location}</h1>

              <br/>

              <h3>Date:</h3>
              <h1>{event.date}</h1>

              <br/>

              <h3>Hosted by:</h3>
              <Link to={`/groups/${event.group.id}`}>
                <h1>{event.group.name}</h1>
              </Link>

              <br/>

              <div className='event-group-info'>
                <h3>Members</h3> <br/>
                <h3>Organizer</h3> <br/>
                <h3>Calendar</h3> <br/>
              </div>

            </div>
          </div>

          <br/>

          <div className='show-details'>
            <h6>{event.description}</h6>
          </div>
        </div>
      </div>
    );
  }
}

export default EventShow;
