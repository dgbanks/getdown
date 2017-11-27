import React from 'react';
import Modal from 'react-modal';

class GroupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      zip_code: "",
      category: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault;
    this.props.createGroup(this.state);
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

        <h2 className='modal-type'>start a new group</h2>

        <label className='session-label'> Group Name
          <input className= 'session-input' type='text' value={this.state.name} onChange={this.update('name')}/>
        </label>  <br/>

      <label className='session-label'> Description
            <input className= 'session-input' type='text' value={this.state.description} onChange={this.update('description')}/>
          </label>  <br/>

        <label className='session-label'> Zip Code
            <input className= 'session-input' type='text' value={this.state.zip_code} onChange={this.update('zip_code')}/>
          </label>  <br/>

        <label className='session-label'> Category <br/>
          <select className= 'session-input' value={this.state.category} onChange={() => this.update('category')}>
            <option disabled>Select category</option>
            <option value={'ice cream'}>Ice Cream</option>
            <option value={'books'}>Books</option>
          </select>
        </label>  <br/>

        <input className='session-button' type='submit' value="Create Group"></input>

      </form>
    );
  }

}

export default GroupForm;
