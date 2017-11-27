import React from 'react';

class UserForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      zip_code: "",
      interests: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  handleCheckbox(event) {
    event.preventDefault();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, idx) => (
          <li key={idx}>{err}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <form className="session-form" onSubmit={this.handleSubmit}>
        <h1 className='modal-logo'>getdown</h1>
        <h2 className='modal-type'>sign up</h2>

        <label className='session-label'> Name
          <input
            className= 'session-input'
            type='text'
            value={this.state.name}
            onChange={this.update('name')}/>
        </label>  <br/>

      <label className='session-label'> Email
          <input className= 'session-input'
            type='text'
            value={this.state.email}
            onChange={this.update('email')}/>
        </label>  <br/>

      <label className='session-label'> Password
          <input className= 'session-input'
            type='password'
            value={this.state.password}
            onChange={this.update('password')}/>
        </label>  <br/>

      <label className='session-label'> Zip Code
          <input className= 'session-input'
            type='text'
            value={this.state.zip_code}
            onChange={this.update('zip_code')}/>
        </label>  <br/>

      <label className='session-label'> Interests <br/>
          <input className= 'session-input'
            type='checkbox'
            value="Ice Cream"
            onChange={() => this.handleCheckbox()}/>Ice Cream <br/>
          <input className= 'session-input'
            type='checkbox'
            value="Books"/>Books <br/>
        </label>  <br/>

      <input className= 'session-button' type='submit' value="SIGN UP"></input>

      </form>
    );
  }

}

export default UserForm;
