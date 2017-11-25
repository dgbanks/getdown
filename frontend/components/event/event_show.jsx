import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleJoinEvent = this.handleJoinEvent.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
  }

  componentDidMount() {
    if (!this.props.event) {
      this.props.fetchEvent(this.props.match.params.eventId);
    }
  }

  handleJoinEvent() {
    if (this.props.currentUser) {
      this.props.joinEvent(this.props.event.id);
    } else {
      this.props.toggleModal();
    }
  }
  //need to pass in an actionType or something here to differentiate between possibilities

  renderButtons() {
    if (this.props.event.group.isCurrentUserMember) {
      return (
        <button onClick={this.handleJoinEvent}>I'm Down!</button>
      );
    } else {
      return (
        <button onClick={this.handleJoinEvent}>Join and RSVP</button>
      );
    }
  }

  render() {
    console.log(this.props.event);
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
              <h3>{event.attendance} people are down</h3>

              <div className='page-actions'>
                {this.renderButtons()}
              </div>

            </div>

          </div>
        </div>

        <div className='main-body'>

          <div className='page-details'>
            <h1>Details</h1>
            <div className='description'>
              <p>{event.description}</p>
            </div>
          </div>

          <div className='event-info'>
            <div className='event-time'>
              <h2>{event.date}, {event.time}</h2>
            </div>

            <div className='event-location'>
              <h2>{event.venue}</h2>
              <h2>{event.address}</h2>
            </div>
          </div>
        </div>


      </div>
    );
  }
}

export default EventShow;
