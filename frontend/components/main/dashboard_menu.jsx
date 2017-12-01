import React from 'react';
import Modal from 'react-modal';
import GroupFormContainer from '../group/group_form_container';
import EventFormContainer from '../event/event_form_container';


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


class DashboardMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: this.props.getdownModalIsOpen,
      formType: ''
    };


    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.determine = this.determine.bind(this);
    this.changeForm = this.changeForm.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.renderModalNavOptions = this.renderModalNavOptions.bind(this);
  }

  componentWillReceiveProps(newProps) {
    this.setState({ modalIsOpen: newProps.modalIsOpen });
  }

  openModal(formType) {
    this.setState({ formType: formType });
    this.props.toggleGetdownModal();
  }

  closeModal() {
    this.setState({ formType: "" });
    this.props.toggleGetdownModal();
  }

  changeForm() {
    if (this.state.formType === 'createGroup') {
      this.setState({formType: 'createEvent'});
    } else {
      this.setState({formType: 'createGroup'});
    }
  }

  renderModalNavOptions() {
    let navLink;
    if (this.state.formType === 'createGroup') {
      navLink = 'Or create an event';
    } else {
      navLink = 'Or create a group';
    }

    return (
      <div className='modal-nav-options'>
        <button className='navlink' onClick={this.changeForm}>
          {navLink}
        </button>
      </div>
    );
  }

  determine() {
    if (this.state.formType === 'createGroup') {
      return (
        <GroupFormContainer categories={this.props.categories}/>
      );
    } else {
      console.log('DashboardMenu.determine: this.props=', this.props);
      return (
        <EventFormContainer pathname={this.props.pathname}/>
      );
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
    console.log('DashboardMenu.render: this.props.defaultGroupId=', this.props.defaultGroupId);
    return (
      <div>


        <nav className="dropdown">
          <button className="dropdown-button">{this.props.currentUser.name} ▾</button>
          <div className="dropdown-menu">
            <button className='dropdown-option'
              onClick={() => this.openModal('createGroup')}>Start a Group</button>
            <button className='dropdown-option'
              onClick={this.props.logout}>Logout</button>
          </div>
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

export default DashboardMenu;
