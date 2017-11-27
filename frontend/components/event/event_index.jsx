import React from 'react';
import EventIndexItem from './event_index_item';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.prevDate;
  }

  componentDidMount() {
    if (this.props.match.params.groupId) {
      this.props.fetchGroupEvents(this.props.match.params.groupId);
    } else if (this.props.match.params.categoryId) {
      this.props.fetchCategoryEvents(this.props.match.params.categoryId);
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

  resizeIndexItems() {
    if (!this.props.itemSize) {
      return 'large-event-item';
    } else {
      return '';
    }
  }

  renderItemDates(event) {
    if (event.date !== this.prevDate) {
      this.prevDate = event.date;
      return (
        <h1>{event.date}</h1>
      );
    }
  }

  render() {
    return (
        <div className='event-index'>

          <div className={this.resizeIndexItems()}>
            {
              this.props.events.map(event => (
                <div>
                  {this.renderItemDates(event)}
                  <EventIndexItem
                    key={event.id}
                    event={event}
                    itemSize={this.props.itemSize} />
                </div>
              ))
            }
          </div>
        </div>
    );
  }
}

export default EventIndex;
