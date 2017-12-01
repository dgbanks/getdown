import React from 'react';
import Modal from 'react-modal';
import Datepicker from './datepicker';

class EventForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      location: "",
      date: 'Sun, 01 Oct 2017',
      time: "12PM"
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.parseDate = this.parseDate.bind(this);
  }

  componentDidMount() {
    this.setState({defaultGroupId: this.props.pathname.split('/').slice(-1)[0]})
  }

  handleSubmit(event) {
    event.preventDefault;
    console.log(this.state);
    this.props.createEvent(this.props.groupId, this.state);
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
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

        <label className='session-label'> Event Name
          <input className= 'session-input' type='text' value={this.state.name} onChange={this.update('name')}/>
        </label>  <br/>

        <label className='session-label'> Description
          <input className= 'session-input' type='text' value={this.state.description} onChange={this.update('description')}/>
        </label>  <br/>

        <label className='session-label'> Location
            <input className= 'session-input' type='text' value={this.state.location} onChange={this.update('location')}/>
        </label> <br/>

      <label className='session-label'> Date & Time
          <br/>
          <Datepicker
            parseDate={this.parseDate} />
        </label> <br/>

      <input className='session-button' type='submit' value="Create Event"></input>

      </form>
    );
  }
}

export default EventForm;
