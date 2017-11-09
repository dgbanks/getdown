import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    // this.changeForm = this.changeForm.bind(this);
    // this.navLink = this.navLink.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    // this.determine = this.determine.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    // this.demoLogin = this.demoLogin.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.formType === 'signup') {
      this.props.signup(this.state);
    } else {
      this.props.login(this.state);
    }
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
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
    return(
      <form className="session-form" onSubmit={this.handleSubmit}>

        <h1 className='modal-logo'>getdown</h1>
        <h2 className='modal-type'>sign up</h2>

        <label className='session-label'> Email
          <input
            className= 'session-input'
            type='text'
            value={this.state.email}
            onChange={this.update('email')}/>
        </label>  <br/>

        <label className='session-label'> Password
          <input
            className= 'session-input'
            type='password'
            value={this.state.password}
            onChange={this.update('password')}/>
        </label>  <br/>

      <input className= 'session-button' type='submit' value="Sign In"></input>

      </form>
    );
  }
}

export default SessionForm;
