import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.fetchAllEvents(this.props.currentUser.id);
    } else {
      this.props.fetchAllEvents();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.currentUser && !prevProps.currentUser) {
      this.props.fetchAllEvents(this.props.currentUser.id);
    } else if (!this.props.currentUser && prevProps.currentUser) {
      this.props.fetchAllEvents();
    }
  }

  render() {
    return (
      <div className='event-index-container'>
        <div className='event-INDEX'>
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
