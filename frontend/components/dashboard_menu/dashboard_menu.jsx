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

class DashboardMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};
  }

  openModal(formType) {
    this.formType === formType;
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.formType = "";
    this.setState({modalIsOpen: false,});
  }

  update() {
    
  }

  determine() {
    if (this.formType === 'createGroup') {
      return (
        <form>
          <h1 className='form-type'>Start a new group</h1>

          <label> Name
            <input></input>
          </label>

          <label> Description
            <input></input>
          </label>

          <label> Location
            <input></input>
          </label>

          <label> Category
            <input></input>
          </label>

        </form>
      );
    } else if (this.formType === 'userGroups') {
      return (
        <GroupIndexContainer />
      );
    } else {
      return (
        <form>
          <h1>Edit Profile</h1>
            <label className='modal-label'> Name
              <input className= 'modal-input' type='text' value={this.state.name} onChange={this.update('name')}/>
            </label>  <br/>

            <label className='modal-label'> Email
              <input className= 'modal-input' type='text' value={this.state.email} onChange={this.update('email')}/>
            </label>  <br/>

            <label className='modal-label'> Password
              <input className= 'modal-input' type='password' value={this.state.password} onChange={this.update('password')}/>
            </label>  <br/>

            <label className='modal-label'> Zip Code
              <input className= 'modal-input' type='text' value={this.state.location} onChange={this.update('location')}/>
            </label>  <br/>

            <label className='modal-label'> Interests <br/>
              <input className= 'modal-input' type='checkbox' value="Ice Cream" onChange={() => this.handleCheckbox()}/>Ice Cream <br/>
              <input className= 'modal-input' type='checkbox' value="Books"/>Books <br/>
            </label>  <br/>

            <input className= 'modal-button' type='submit' value="SIGN UP"></input>
        </form>
      );
    }
  }

  render() {
    return (
      <div>

        <div className="dropdown">
          <button className="dropdown-button">{this.props.currentUser.name}</button>
          <div className="dropdown-menu">
            <ul>
              <li><button className='dropdown-option' onClick={() => this.openModal('createGroup')}>Start a Group</button></li>
              <li><button className='dropdown-option' onClick={() => this.openModal('groupIndex')}>Your Groups</button></li>
              <li><button className='dropdown-option' onClick={() => this.openModal('updateUser')}>Update Profile</button></li>
              <li><button className='dropdown-option' onClick={this.props.logout}>Logout</button></li>
            </ul>
          </div>
        </div>

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
