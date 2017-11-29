import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
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

        <h2 className='modal-type'>sign in</h2>

        <label className='session-label'>
          <p>Email</p>
          <input
            className='session-input'
            type='text'
            value={this.state.email}
            onChange={this.update('email')}/>
        </label>

        <label className='session-label'> <p>Password</p>
          <input
            className='session-input'
            type='password'
            value={this.state.password}
            onChange={this.update('password')}/>
        </label>

      <input className= 'session-button' type='submit' value="Sign In"></input>

      </form>
    );
  }
}

export default SessionForm;
