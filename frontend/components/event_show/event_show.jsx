import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleJoinEvent = this.handleJoinEvent.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.match.params.eventId);
    // this.props.fetchEvent(this.props.event.id);
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
    if (!event) {
      return null;
    }
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

              <h3>Time:</h3>
              <h1>{event.time}</h1>

              <br/>

              <h3>Hosted by:</h3>
              <Link to={`/groups/${event.group.id}`}>
                <h1>{event.group.name}</h1>
              </Link>

              <br/>

              <div className='event-group-info'>
                <h3>Members: ({event.attendance})</h3> <br/>
                <h3>Host: {event.host.name}</h3> <br/>
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
