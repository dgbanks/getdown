import React from 'react';
import Modal from 'react-modal';
import UserFormContainer from '../user/user_form_container';
import SessionFormContainer from '../session/session_form_container';

const customStyles = {
  overlay : {
    // position : 'fixed',
    zIndex: '1000',
    backgroundColor : 'rgba(0,0,0, 0.75)',
  },
  content : {
    // position                   : 'absolute',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    border: '1px solid #ccc',
    background: 'white',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '10px',
    outline: 'none',
    padding: '20px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px'
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
      formType: "",

      // modalIsOpen: false
      modalIsOpen: this.props.modalIsOpen
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.navLink = this.navLink.bind(this);
    this.determine = this.determine.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
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


  componentWillReceiveProps(newProps) {
    console.log('SessionLinks.componentWillReceiveProps');
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
    this.props.toggleSessionModal();
  }

  closeModal() {
    this.setState({
      name: "",
      email: "",
      password: "",
      zip_code: "",
      interests: "",
      formType: ""
    });
    this.props.toggleSessionModal();
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

  determine() {
    if (this.state.formType === 'signup') {
      return (
        <UserFormContainer />
      );
    } else {
      return (
        <SessionFormContainer />
      );
    }
  }

  // renderErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((err, idx) => (
  //         <li key={idx}>{err}</li>
  //       ))}
  //     </ul>
  //   );
  // }

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
            {this.navLink()}
          </div>

        </Modal>

      </div>
    );
  }
}

export default SessionLinks;
