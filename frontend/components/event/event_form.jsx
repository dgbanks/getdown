import React from 'react';
import Modal from 'react-modal';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class EventForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      venue: "",
      address: "",
      date: "",
      time: "",
      group_id: parseInt(this.props.pathname.split('/')[5])
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.parseDate = this.parseDate.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault;
    this.props.createEvent(this.props.groupId, this.state);
  }

  update(field) {
    return e => {
      if (field === 'datetime') {
        this.selectedDate = e;
        this.setState({['date']: new Date(e._d.toDateString()) });
        this.setState({['time']: e._d.toTimeString() });
      } else {
        this.setState({[field]: e.target.value});
      }
    };
  }

  parseDate(dateTime) {
    let date = dateTime.toDateString();
    let time = dateTime.toTimeString();
    this.setState({date, time});
  }

  render() {
    return (
      <form className="session-form" onSubmit={this.handleSubmit}>

        <h2 className='modal-type'>make a new event</h2>

          <div className='user-inputs'>
              <div className='text-inputs'>
                <label className='session-label'> Event Name
                  <input
                    className= 'session-input'
                    type='text'
                    value={this.state.name}
                    onChange={this.update('name')}/>
                  </label>

                  <label className='session-label'> Description
                    <div className='text-field'>
                      <textarea
                        className='session-input'
                        type='text'
                        value={this.state.description}
                        onChange={this.update('description')}/>
                      </div>
                    </label>
              </div>

              <div className='text-inputs'>
                <label className='session-label'> Venue
                  <input
                    className= 'session-input'
                    type='text'
                    value={this.state.venue}
                    onChange={this.update('venue')}/>
                  </label>

                <label className='session-label'> Address
                  <input
                    className= 'session-input'
                    type='text'
                    value={this.state.address}
                    onChange={this.update('address')}/>
                  </label>

                  <label className='session-label'> Date & Time
                    <DatePicker
                      selected={this.selectedDate}
                      onChange={this.update('datetime')}
                      showTimeSelect
                      inline
                      dateFormat="LLL" />
                  </label>

              </div>


          </div>


      <input
        className='session-button'
        type='submit'
        value="Create Event">
      </input>

      </form>
    );
  }
}

export default EventForm;
