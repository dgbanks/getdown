import React from 'react';
import Modal from 'react-modal';
import GroupFormContainer from '../group_form/group_form_container';
import GroupIndexContainer from '../group_index/group_index_container';

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

class DashboardMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};
    this.formType = "";

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.determine = this.determine.bind(this);
  }

  openModal(formType) {
    this.formType = formType;
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.formType = "";
    this.setState({
      modalIsOpen: false
    });
  }

  determine() {
    if (this.formType === 'createGroup') {
      return (
        <GroupFormContainer />
      );
    } else if (this.formType === 'groupIndex') {
      return (
        <GroupIndexContainer />
      );
    } else {
      return (
        'this is where the updateUser would go'
      );
    }
  }

  render() {
    console.log(this.props);
    return (
      <div>

        <nav className="dropdown">
          <button className="dropdown-button">{this.props.currentUser.name}</button>
          <div className="dropdown-menu">
            <button className='dropdown-option' onClick={() => this.openModal('createGroup')}>Start a Group</button>
            <button className='dropdown-option' onClick={() => this.openModal('groupIndex')}>Your Groups</button>
            <button className='dropdown-option' onClick={() => this.openModal('updateUser')}>Update Profile</button>
            <button className='dropdown-option' onClick={this.props.logout}>Logout</button>
          </div>
        </nav>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={() => this.closeModal()}
          contentLabel="Modal"
          style={customStyles}
        >
          {this.determine()}
        </Modal>

      </div>
    );
  }
}

export default DashboardMenu;
