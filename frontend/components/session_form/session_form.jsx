import React from 'react';
import Modal from 'react-modal';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      location: "",
      interests: "",

      modalIsOpen: false
    };
    this.formType = "";
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.navLink = this.navLink.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.determine = this.determine.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  openModal(formType) {
    this.formType = formType;
    this.setState({
      modalIsOpen: true
    });
  }

  closeModal() {
    this.formType = "";
    this.setState({
      modalIsOpen: false,
      name: "",
      email: "",
      password: "",
      location: "",
      interests: ""
    });
  }

  changeForm() {
    if (this.formType === 'signup') {
      this.formType = 'login';
    } else {
      this.formType = 'signup';
    }
  }

  navLink() {
    if (this.formType === 'signup') {
      return (
        <button onClick={this.changeForm}>Already have an account?</button>
      );
    } else {
      return (
        <button onClick={this.changeForm}>Don't have an account?</button>
      );
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.formType === 'signup') {
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

  determine() {
    if (this.formType === 'signup') {
      return (
        <form onSubmit={this.handleSubmit}>

          <label> Name
            <input type='text' value={this.state.name} onChange={this.update('name')}/>
          </label>

          <label> Email
            <input type='text' value={this.state.email} onChange={this.update('email')}/>
          </label>

          <label> Password
            <input type='password' value={this.state.password} onChange={this.update('password')}/>
          </label>

          <label> Zip Code
            <input type='text' value={this.state.location} onChange={this.update('location')}/>
          </label>

          <label> Interests
            <input type='checkbox' name={this.state.interests} value="ice cream"/>
          </label>

          <input type='submit' value="SIGN UP"></input>

        </form>
      );
    } else {
      return (
        <form onSubmit={this.handleSubmit}>

          <label> Email
            <input type='text' value={this.state.email} onChange={this.update('email')}/>
          </label>

          <label> Password
            <input type='password' value={this.state.password} onChange={this.update('password')}/>
          </label>

          <input type='submit' value="Sign In"></input>

        </form>
      );
    }
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
      <div>

        <nav className='signup-login'>
          <button onClick={() => this.openModal('signup')}>
            Sign Up
          </button>

          <button onClick={() => this.openModal('login')}>
            Log In
          </button>
        </nav>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.closeModal()}
          contentLabel="Modal"
        >

          {this.determine()}
          {this.navLink()}
          {this.renderErrors()}

        </Modal>

      </div>
    );
  }
}

export default SessionForm;
