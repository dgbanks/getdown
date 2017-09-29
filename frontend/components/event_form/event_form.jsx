import React from 'react';
import Modal from 'react-modal';

class EventForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      location: "",
      time: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault;
    this.props.createEvent(this.state);
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
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
        </label>

      <input className='session-button' type='submit' value="Create Event"></input>

      </form>
    );
  }
}

export default EventForm;
