import React from 'react';
import Modal from 'react-modal';
import GroupFormContainer from '../group/group_form_container';
import GroupIndexContainer from '../group/group_index_container';

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
    return (
      <div>


        <nav className="dropdown">
          <button className="dropdown-button">{this.props.currentUser.name} ▾</button>
          <div className="dropdown-menu">
            <button className='dropdown-option'
              onClick={() => this.openModal('createGroup')}>Start a Group</button>
            <button className='dropdown-option'
              onClick={() => this.openModal('groupIndex')}>Your Groups</button>
            <button className='dropdown-option'
              onClick={() => this.openModal('updateUser')}>Update Profile</button>
            <button className='dropdown-option'
              onClick={this.props.logout}>Logout</button>
          </div>
        </nav>



      </div>
    );
  }
}

export default DashboardMenu;
