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

      <div className='event-page group-body-main'>

        <div className='event-header'>

          <h1>{event.name}</h1>

          <div className='event-rsvp-info'>
            <h5>Host: {event.host.name}</h5>
            <h6>{event.attendance} people are down</h6>
            <button onClick={this.handleJoinEvent}>I'm Down!</button>
          </div>

        </div>


        <div className='event-details'>

          <h2>{event.date}</h2>
          <h3>{event.time}</h3>
          <h4>{event.location}</h4>

        </div>

        <div className='event-description'>
          <p>{event.description}</p>
        </div>





        <div className='image-container'>

        </div>
        <div className='show-header'>
          <div className='header-left'>
            <h3>{event.name}</h3>
            <button onClick={this.handleJoinEvent}>I'm Down!</button>
          </div>
          <div className='header-right'>
            <p>{event.description}</p>
          </div>
        </div>

        <br/>

        <div className='show-main'>

          <div className='main-left'>
            <h3>Location:</h3>
            <h1>{event.location}</h1>

            <br/>

            <h3>Date:</h3>
            <h1>{event.date}</h1>

            <br/>

            <h3>Time:</h3>
            <h1>{event.time}</h1>
          </div>

          <div className='main-right'>
            <h3>Group:</h3>
            <Link to={`/groups/${event.group.id}`} style={{color: 'white', fontSize: '20px', textDecoration: 'none'}}>
              <h1>{event.group.name}</h1>
            </Link>

            <br/>

            <h3>Attendees: ({event.attendance})</h3>

            <br/>

            <h3>Host:</h3>
            <h1>{event.host.name}</h1>
          </div>

          <br/>

        </div>
      </div>
    );
  }
}

export default EventShow;
