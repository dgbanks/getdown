import React from 'react';
import EventIndexItem from './event_index_item';
import Datepicker from './datepicker';

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
    console.log('EventIndex.resizeIndexItems: this.props.itemSize=', this.props.itemSize);
    if (this.props.itemSize === undefined) {
      return 'large-event-index';
    } else {
      return 'small-event-index';
    }
  }

  renderCalendar() {
    if (!this.props.itemSize) {
      return (
        <div className='calendar-container'>
          <h6>Calendar:</h6>
          <div className='calendar'>
            <Datepicker />
          </div>
        </div>

      );
    }
  }

  renderItemDates(event) {
    if (event.date !== this.prevDate) {
      this.prevDate = event.date;
      return (
        <h6>{event.date}</h6>
      );
    }
  }

  render() {
    if (this.props.itemSize) {
      console.log('SMALL ITEM');
      return (
        <div className={this.resizeIndexItems()}>
          {
            this.props.events.map(event => (
              <div className='wrapper' key={event.id}>
                {this.renderItemDates(event)}
                <EventIndexItem
                  key={event.id}
                  event={event}
                  itemSize={this.props.itemSize} />
              </div>
            ))
          }
        </div>
      );
    } else {
      return (
        <div className='full-page-event-index'>

          <div className={this.resizeIndexItems()}>
            {
              this.props.events.map(event => (
                <div className='wrapper' key={event.id}>
                  {this.renderItemDates(event)}
                  <EventIndexItem
                    key={event.id}
                    event={event} />
                  </div>
                ))
              }
            </div>

            {this.renderCalendar()}

          </div>

        );

    }

  }
}

export default EventIndex;
