import React from 'react';
import EventIndexItem from './event_index_item';
import Datepicker from './datepicker';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class EventIndex extends React.Component {
  constructor(props) {
    super(props);
    this.prevItemDate;
    this.state = {events: props.events};

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log('EventIndex.componentDidMount: this.props.events=', this.props.events);
    if (this.props.match.params.groupId) {
      this.props.fetchGroupEvents(this.props.match.params.groupId);
    } else if (this.props.match.params.categoryId) {
      this.props.fetchCategoryEvents(this.props.categoryId);
    } else if (this.props.currentUser) {
      this.props.fetchUserEvents(this.props.currentUser.id);
    } else {
      this.props.fetchEvents();
    }
  }

  resizeIndexItems() {
    if (this.props.itemSize === undefined) {
      return 'large-event-index';
    } else {
      return 'small-event-index';
    }
  }

  handleChange(date) {
    console.log(date._d.toLocaleDateString());
    // if (date instanceof moment) {
    //   date = date._d;
    // }
    //
    // this.selectedDate = date;
    // let array = date.toLocaleDateString().split('/');
    // let year = array.pop();
    // array.unshift(year);
    // this.calendarDate = array.join('-');
    //
    // let events = this.props.events;
    // this.setState({events: events.filter(event => (event.date >= this.calendarDate))});
  }

  renderCalendar() {
    // if (!this.selectedDate) {
    //   this.handleChange(new Date);
    // }


    if (!this.props.itemSize) {
      return (
        <div className='calendar-container'>
          <h6>Calendar:</h6>
          <DatePicker
            selected={this.selectedDate}
            onChange={this.handleChange}
            inline
            dateFormat="LLL" />
        </div>

      );
    }
  }

  renderItemDates(event) {
    if (event.date !== this.prevItemDate) {
      this.prevItemDate = event.date;
      return <h6>{event.date.toDateString()}</h6>;
    }
  }

  render() {

    if (this.props.itemSize) {
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

      // console.log('EventIndex.render: this.state=',this.state);
      // console.log('EventIndex.render: this.props=',this.props);

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
