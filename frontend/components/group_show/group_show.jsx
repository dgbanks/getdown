import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import EventIndexContainer from '../event_index/event_index_container';
import EventFormContainer from '../event_form/event_form_container';
import EventShowContainer from '../event_show/event_show_container';

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
    width: '600px',
    height: '450px'
  }
};

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};
    this.formType = "";

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    // this.determine = this.determine.bind(this);

    this.isMember = this.isMember.bind(this);
    this.handleCreateEvent = this.handleCreateEvent.bind(this);
    this.handleJoinGroup = this.handleJoinGroup.bind(this);
    this.getButtons = this.getButtons.bind(this);
    this.getMainBody = this.getMainBody.bind(this);
  }

//////////

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

  // determine() {
  //   if (this.formType === 'createEvent') {
  //     return(
  //       <EventFormContainer groupId={this.props.group.id}/>
  //     );
  //   } else {
  //     return (
  //       'something'
  //     );
  //   }
  // }

//////////

  isMember() {
    if (this.props.group.isCurrentUserMember) {
      return (
        <p>you are a member</p>
      );
    }
  }

  getMainBody() {
    if (this.props.match.params.eventId) {
      return (
        <EventShowContainer />
      );
    } else {
      return (
          <div className='group-body-main'>

              <div className='group-description'>
                <p>{group.description}</p>
              </div>

              <div className='group-events'>

                <h1>Upcoming {group.name} Events</h1>


                <EventIndexContainer />

              </div>

          </div>
      );
    }
  }


/// this file still needs:
// getButtons() => decide between joinGroup and leaveGroup/createEvent
// getMainBody() => decide between group description/calendar and event show page

  componentDidMount() {
    this.props.fetchGroup(this.props.match.params.groupId);
  }

  handleJoinGroup() {
    if (this.props.currentUser) {
      this.props.joinGroup(this.props.group.id);
    } else {
      this.props.toggleModal();
    }
  }

  handleCreateEvent() {
    // if (this.props.currentUser) {
    //   this.openModal('createEvent');
    // } else {
    //   this.props.toggleModal();
    // }
    this.setState({modalIsOpen: true});
  }

  getButtons() {
    if (this.props.currentUser) {
          if (this.props.group.isCurrentUserMember) {
            ////// still need leaveGroup utils and actions
            return (
              <div className='group-actions'>
                <button onClick={this.getEventForm}>Leave Group</button>
                <button onClick={this.handleCreateEvent}>Create Event</button>
              </div>
            );
          } else {
            return (
              <div className='group-actions'>
                <button onClick={this.handleJoinGroup}>Join Group</button>
              </div>
            );
          }
    } else {
      return (
        <div className='group-actions'>
          <button onClick={this.handleJoinGroup}>Join Group</button>
        </div>
      );
    }
  }

  render () {
    const group = this.props.group;
    if (group === undefined) {
      return (
        <div>loading...</div>
      );
    }

    return (
      <div className='group-page'>

          {this.isMember()}

          <div className='group-header'>
            <h1>{group.name}</h1>
          </div>

          <div className='group-body'>

              <div className='group-body-left'>

                <div className='group-image'></div>

                <div className='group-info' >
                  <h1>{group.address}</h1>
                  <h1>{group.memberCount} members ||| Organized by {group.organizer.name}</h1>
                </div>

                {this.getButtons()}

              </div>


              <div className='group-body-main'>

                  <div className='group-description'>
                    <p>{group.description}</p>
                  </div>

                  <div className='group-events'>

                    <h1>Upcoming {group.name} Events</h1>


                    <EventIndexContainer />

                  </div>

              </div>

          </div>

          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={() => this.closeModal()}
            contentLabel="Modal"
            style={customStyles}>

            <EventFormContainer groupId={this.props.group.id}/>

          </Modal>






        <div className='show-header'>
          <div className='header-left'>
            <h3>{group.name}</h3>
            <button onClick={this.handleJoinGroup}>Join Group</button>
          </div>
          <div className='header-right'>
            <p>{group.description}</p>
          </div>
        </div>

        <br/>

        <div className='show-main'>
          <div className='left-nav'>

            <div className='left-content'>
              <br/>
              <h3>Location:</h3>
              <h1>{group.address}</h1>
              <br/>
              <h3>Organizer:</h3>
              <h1>{group.organizer.name}</h1>
              <br/>
              <h3>Members: ({group.memberCount})</h3>
              <br/>
              <button onClick={this.handleCreateEvent}>Create Event</button>
            </div>

          </div>
          <br/>
          <div className='show-details'>
          </div>
        </div>





      </div>
    );

  }
}

export default GroupShow;


// <div className='group-subhead'>
//   <h1>{group.address}</h1>
//     <h1>Organized by {group.organizer.name}</h1>
//       <h1>{group.memberCount} members</h1>
//       </div>
