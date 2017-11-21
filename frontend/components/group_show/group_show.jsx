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
    // this.group = this.props.group;
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

//////////

  isMember() {
    if (this.props.group.isCurrentUserMember) {
      return (
        <p>you are a member</p>
      );
    }
  }

  getMainBody() {
    if (this.props.location.pathname.includes('events/')) {
      let eventId = this.props.location.pathname.split('/').slice(-1)[0];
      return (
        <EventShowContainer eventId={ eventId }/>
      );
    } else {
      return (
          <div className='group-body-main'>

              <div className='group-description'>
                <p>{this.props.group.description}</p>
              </div>

              <div className='group-events'>

                <h1>Upcoming {this.props.group.name} Events</h1>


                <EventIndexContainer />

              </div>

          </div>
      );
    }
  }

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
    this.setState({modalIsOpen: true});
  }

  getButtons() {
    // if (this.props.currentUser) {
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
    // } else {
    //   return (
    //     <div className='group-actions'>
    //       <button onClick={this.handleJoinGroup}>Join Group</button>
    //     </div>
    //   );
    // }
  }

  render () {
    const group = this.props.group;
    if (group === undefined) {
      return (
        <div>loading...</div>
      );
    }

    const david = this.getMainBody();

    return (
      <div className='group-page'>

          {this.isMember()}

          <div className='group-header'>
            <Link to={`/groups/${group.id}`} style={{textDecoration: 'none'}}>
              <h1>{group.name}</h1>
            </Link>
          </div>

          <div className='group-body'>

              <div className='group-body-left'>

                <div className='group-image' style={{backgroundImage: `url(${group.img_url})`}}></div>

                <div className='group-info' >
                  <h1>{group.address}</h1>
                  <h1>{group.memberCount} members ||| Organized by {group.organizer.name}</h1>
                </div>

                {this.getButtons()}

              </div>

              {this.getMainBody()}

          </div>

          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={() => this.closeModal()}
            contentLabel="Modal"
            style={customStyles}>

            <EventFormContainer groupId={this.props.group.id}/>

          </Modal>

      </div>
    );

  }
}

export default GroupShow;
