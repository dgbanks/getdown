import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleAttendanceChange = this.handleAttendanceChange.bind(this);
    this.renderAttendees = this.renderAttendees.bind(this);
    this.renderUserRole = this.renderUserRole.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  componentDidMount() {
    if (!this.props.event) {
      this.props.fetchEvent(this.props.match.params.eventId);
    }
  }

  handleAttendanceChange(action) {
    if (this.props.currentUser) {
      if (action === 'skip') {
        this.props.skipEvent(this.props.event.id);
      } else {
        this.props.rsvpToEvent(this.props.event.id);
      }
      window.location.reload();
    } else {
      this.props.toggleSessionModal();
    }
  }


  renderAttendees(event) {
    return (
      <div className='attendance'>
        <h1>Attendees</h1>
        {
          event.attendees.map(guest => (
            <div key={guest.id} className='associated-user attendees'>
              <h2>{guest.name}</h2>
              <h3>{this.renderUserRole(guest, event)}</h3>
            </div>
            ))
        }
      </div>
    );
  }

  renderUserRole(attendee, event) {
    if (event.host.name === attendee.name) {
      return 'Organizer';
    } else {
      return 'Member';
    }
  }

  renderButtons(event) {
    if (event.isCurrentUserAttending) {
      return (
        <div className='event-actions page-actions'>
          <button onClick={() => this.handleAttendanceChange('skip')}>
            Not Down
          </button>
          <h3>{`You and ${event.attendance - 1} others are down`}</h3>
        </div>
      );
    } else {
      return (
        <div className='event-actions page-actions'>
          <button onClick={() => this.handleAttendanceChange('rsvp')}>
            I'm Down!
          </button>
          <h3>{`${event.attendance} people are down`}</h3>
        </div>
      );
    }
  }

  render() {
    const event = this.props.event;
    if (!event) {
      return null;
    }

    return (
      <div className='event-page'>
        <div className='event-header'>
          <div className='header-content'>
            <div className='event-header-info'>
              <h2>{event.date}, {event.time}</h2>
              <h1>{event.name}</h1>
              <h3>Hosted by {event.host.name}</h3>
              <h3>From {" "}
                <Link
                  to={`/groups/${event.group.id}`}
                  style={{textDecoration: 'none', color: 'blue'}}>
                  {event.group.name}
                </Link>
              </h3>
            </div>
            <div className='rsvp-info'>
              {this.renderButtons(event)}
            </div>
          </div>
        </div>

        <div className='main-body event-body'>

          <div className='page-details'>
            <h1>Details</h1>
            <div className='description'>
              <p>{event.description}</p>
            </div>
          </div>

          <div className='event-sidebar'>

            <div className='event-info'>
                <div className='event-time'>
                  <h2>{event.date}, {event.time}</h2>
                </div>

                <div className='event-location'>
                  <h2>{event.venue}</h2>
                  <h2>{event.address}</h2>
                </div>
            </div>
            {this.renderAttendees(event)}
          </div>
        </div>
      </div>
    );
  }
}

export default EventShow;
