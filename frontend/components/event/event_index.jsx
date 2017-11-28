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
    this.calendarDate;
  }

  componentDidMount() {
    // console.log('EventIndex.componentDidMount: this.props.events BEFORE', this.props.events);
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

  // formatDate(date) {
  //   let array = date.toLocaleDateString().split('/');
  //   let year = array.pop();
  //   array.unshift(year);
  //   return array.join('-');
  // }
  //
  handleChange(date) {
    // let array = date._d.toLocaleDateString().split('/');
    // let year = array.pop();
    // array.unshift(year);
    // let newDate = array.join('-');
    // // this.calendarDate = newDate;
    // this.setState({
    //   events: this.props.events.filter(event => (event.date >= newDate))
    // });

    console.log(date._d);
  }

  renderCalendar() {
    if (!this.props.itemSize) {
      return (
        <div className='calendar-container'>
          <h6>Calendar:</h6>
          <DatePicker
            selected={moment().add(1, 'days')}
            onChange={this.handleChange}
            inline
            dateFormat="LLL"
            />
        </div>

      );
    }
  }

  renderItemDates(event) {
    if (event.date !== this.prevItemDate) {
      this.prevItemDate = event.date;
      return <h6>{event.date}</h6>;
    }
  }

  render() {

    // console.log('EventIndex.render: this.state.events=', this.state.events);
    // console.log('EventIndex.render: this.props.events=', this.props.events);




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

      // if (!this.state.events) {
      //   return <div>loading...</div>;
      // }
      //
      // console.log('EventIndex.render: this.state.events=',this.state.events);

      console.log('EventIndex.render: this.props.events=', this.props.events);
      this.props.events.forEach(event => console.log('hello', event));
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
