import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
    // position : 'fixed',
    backgroundColor : 'rgba(0,0,0, 0.75)',
  },
  content : {
    // position                   : 'absolute',
    top                        : '50%',
    left                       : '50%',
    right                      : 'auto',
    bottom                     : 'auto',
    border                     : '1px solid #ccc',
    background: 'white',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    borderRadius               : '10px',
    outline                    : 'none',
    padding                    : '20px',
    marginRight                : '-50%',
    transform                  : 'translate(-50%, -50%)',
    width                      : '400px'
  }
};

class SessionForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      location: "",
      interests: "",
      formType: "",

      // modalIsOpen: false
      modalIsOpen: this.props.modalIsOpen
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.navLink = this.navLink.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.determine = this.determine.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  demoLogin() {
    this.setState({
      email: 'email2',
      password: 'password'
    }, () => this.props.login(this.state));

  }


  componentWillReceiveProps(newProps) {
    this.setState({modalIsOpen: newProps.modalIsOpen});
    if (this.state.modalIsOpen && this.state.formType === "") {
      this.setState({
        formType: 'login'
      });
    }
  }

////////// CONSOLIDATE BELOW
  openModal(formType) {
    this.setState({
      formType: formType
    });
    this.props.toggleModal();
  }

  closeModal() {
    this.setState({
      name: "",
      email: "",
      password: "",
      location: "",
      interests: "",
      formType: ""
    });
    this.props.toggleModal();
  }
////////// CONSOLIDATE ABOVE

  changeForm() {
    if (this.state.formType === 'signup') {
      this.setState({formType: 'login'});
    } else {
      this.setState({formType: 'signup'});
    }
  }

  navLink() {
    if (this.state.formType === 'signup') {
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

  handleCheckbox(event) {
    event.preventDefault();
  }

  determine() {
    if (this.state.formType === 'signup') {
      return (
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h1 className='modal-logo'>getdown</h1>
          <h2 className='modal-type'>sign up</h2>

          <label className='session-label'> Name
            <input className= 'session-input' type='text' value={this.state.name} onChange={this.update('name')}/>
          </label>  <br/>

        <label className='session-label'> Email
            <input className= 'session-input' type='text' value={this.state.email} onChange={this.update('email')}/>
          </label>  <br/>

        <label className='session-label'> Password
            <input className= 'session-input' type='password' value={this.state.password} onChange={this.update('password')}/>
          </label>  <br/>

        <label className='session-label'> Zip Code
            <input className= 'session-input' type='text' value={this.state.location} onChange={this.update('location')}/>
          </label>  <br/>

        <label className='session-label'> Interests <br/>
            <input className= 'session-input' type='checkbox' value="Ice Cream" onChange={() => this.handleCheckbox()}/>Ice Cream <br/>
            <input className= 'session-input' type='checkbox' value="Books"/>Books <br/>
          </label>  <br/>

        <input className= 'session-button' type='submit' value="SIGN UP"></input>

        </form>
      );
    } else {
      return (
        <form className="session-form" onSubmit={this.handleSubmit}>
          <h1 className='modal-logo'>getdown</h1>
          <h2 className='modal-type'>sign up</h2>

          <label className='session-label'> Email
            <input className= 'session-input' type='text' value={this.state.email} onChange={this.update('email')}/>
          </label>  <br/>

        <label className='session-label'> Password
            <input className= 'session-input' type='password' value={this.state.password} onChange={this.update('password')}/>
          </label>  <br/>

        <input className= 'session-button' type='submit' value="Sign In"></input>

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

          <button onClick={this.demoLogin}>
            Guest Login
          </button>
        </nav>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.closeModal()}
          contentLabel="Modal"
          style={customStyles}
        >
          <div className="session-form-container">
            {this.determine()}
            {this.navLink()}
            {this.renderErrors()}
          </div>
        </Modal>

      </div>
    );
  }
}

export default SessionForm;
