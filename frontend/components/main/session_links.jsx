import React from 'react';
import Modal from 'react-modal';
import UserFormContainer from '../user/user_form_container';
import SessionFormContainer from '../session/session_form_container';

const customStyles = {
  overlay: {
    position: 'fixed',
    zIndex: '1000',
    backgroundColor: 'rgba(0,0,0, 0.75)',
  },
  content: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: '1px solid #ccc',
    background: 'white',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    outline: 'none',
    transform: 'translate(-50%, -50%)',
    width: 'auto'
  }
};

class SessionLinks extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      zip_code: "",
      interests: "",
      formType: 'signup',
      modalIsOpen: this.props.modalIsOpen
    };

    this.demoLogin = this.demoLogin.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.renderModalNavOptions = this.renderModalNavOptions.bind(this);
    this.determine = this.determine.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ modalIsOpen: newProps.modalIsOpen });
  }

  demoLogin() {
    this.setState({
      name: 'Guest User',
      email: `${Date.now()}@email.com`,
      password: 'password',
      zip_code: 94103,
      interests: ""
    }, () => this.props.signup(this.state));
  }

  openModal(formType) {
    this.setState({ formType: formType });
    this.props.toggleSessionModal();
  }

  closeModal() {
    this.setState({
      name: "",
      email: "",
      password: "",
      zip_code: "",
      interests: "",
      formType: 'signup'
    });
    this.props.toggleSessionModal();
  }

  changeForm() {
    if (this.state.formType === 'signup') {
      this.setState({formType: 'login'});
    } else {
      this.setState({formType: 'signup'});
    }
  }

  renderModalNavOptions() {
    let navLink;
    if (this.state.formType === 'signup') {
      navLink = 'Already have an account? Log in!'
    } else {
      navLink = "Don't have an account? Sign up!"
    }

    return (
      <div className='modal-nav-options'>
        <button className='session-button' onClick={this.demoLogin}>
          Login as Guest
        </button>

        <button className='navlink' onClick={this.changeForm}>
          {navLink}
        </button>
      </div>
    );
  }

  determine() {
    if (this.state.formType === 'signup') {
      return <UserFormContainer categories={this.props.categories} />;
    } else {
      return <SessionFormContainer />;
    }
  }

  renderErrors() {
    return (
      <div className='modal-errors'>
        {
          this.props.errors.map((err, idx) => (<p key={idx}>{err}</p>))
        }
      </div>
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
          style={customStyles}>

          <div className="session-form-container">
            <h1 className='modal-logo'>getdown</h1>
            {this.determine()}
            {this.renderErrors()}
            {this.renderModalNavOptions()}
          </div>

        </Modal>
      </div>
    );
  }
}

export default SessionLinks;
