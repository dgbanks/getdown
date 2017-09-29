import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.match.params.groupId) {
      this.props.fetchGroupEvents(this.props.match.params.groupId);
    } else if (this.props.currentUser) {
      this.props.fetchUserEvents(this.props.currentUser.id);
    } else {
      this.props.fetchEvents();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentUser && !prevProps.currentUser) {
      this.props.fetchUserEvents(this.props.currentUser.id);
    } else if (!this.props.currentUser && prevProps.currentUser) {
      this.props.fetchEvents();
    }
  }

  render() {
    return (
      <div className='event-index-container'>
        <h1>Upcoming Events:</h1>

        <div className='event-index'>
          <ul>
            {
              this.props.events.map(event => (
                <EventIndexItem
                  key={event.id}
                  event={event} />
              ))
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default EventIndex;
