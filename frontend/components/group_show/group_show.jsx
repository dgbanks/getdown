import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import EventIndexContainer from '../event_index/event_index_container';
import EventFormContainer from '../event_form/event_form_container';

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
    this.determine = this.determine.bind(this);

    this.handleCreateEvent = this.handleCreateEvent.bind(this);
    this.handleJoinGroup = this.handleJoinGroup.bind(this);
    this.eventButton = this.eventButton.bind(this);
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

  determine() {
    if (this.formType === 'createEvent') {
      return(
        <EventFormContainer groupId={this.props.group.id}/>
      );
    } else {
      return (
        'something'
      );
    }
  }

//////////

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
    if (this.props.currentUser) {
      this.openModal('createEvent');
    } else {
      this.props.toggleModal();
    }
  }

  eventButton() {
    if (this.props.currentUser) {
      return (
        <button onClick={this.getEventForm}>Create Event</button>
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

          <div className='group-header'>
            <h1>{group.name}</h1>
          </div>
          <div className='group-subhead'>
            <h1>{group.address}</h1>
            <h1>Organized by {group.organizer.name}</h1>
            <h1>{group.member_count} members</h1>
          </div>

          <div className='group-body'>

            <div className='group-body-left'>

              <div className='group-image'></div>

              <div className='group-info' >
                <h1>{group.address}</h1>
                <h1>{group.member_count} members ||| Organized by {group.organizer.name}</h1>
              </div>

              <div className='group-actions'>
                <button onClick={this.handleJoinGroup}>Join Group</button>
              </div>

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
              <h3>Members: ({group.member_count})</h3>
              <br/>
              <button onClick={this.handleCreateEvent}>Create Event</button>
            </div>

          </div>
          <br/>
          <div className='show-details'>
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

export default GroupShow;
