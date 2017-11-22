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
        <div>
        </div>
      );
      // <EventShowContainer eventId={ eventId }/>
    } else {
      return (
          <div className='group-body-main'>

              <div className='group-description'>
                <p>{this.props.group.description}</p>
              </div>

              <div className='group-events'>
                <h1>Upcoming {this.props.group.name} Events</h1>
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
    console.log(this.props.group);
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
            <div className='header-content'>

              <div
                className='header-image'
                style={{backgroundImage: `url(${group.img_url})`}}>
              </div>

              <div className='header-info'>
                <h1>{group.name}</h1>
                <p>Location</p>
                <h2>{group.location}</h2>
                <p>Members</p>
                <h2>{group.memberCount}</h2>
                <p>Organizer</p>
                <h2>{group.organizer.name}</h2>

                {this.getButtons()}
              </div>

            </div>
            <div className='group-subheader'>
              <div className='subheader-tabs'>

                <Link
                  className='hover-text'
                  to={`/groups/${group.id}`}
                  style={{
                    color: 'inherit',
                    textDecoration: 'inherit'
                  }}>
                  Our group
                </Link>

                <Link
                  className='hover-text'
                  to={`/groups/${group.id}/events`}
                  style={{
                    color: 'inherit',
                    textDecoration: 'inherit'
                  }}>
                  Getdowns
                </Link>

                <Link
                  className='hover-text'
                  to={`/groups/${group.id}`}
                  style={{
                    color: 'inherit',
                    textDecoration: 'inherit'
                  }}>
                  Members
                </Link>
              </div>

            </div>
          </div>

          <div className='next-event'>
          </div>

          <div className='main-body'>

            <div className='page-details'>
              <h1>What we're about</h1>
              <div className='description'>
                <p>{group.description}</p>
              </div>
            </div>

            <div className='group-event-index'>
              <div className='event-index-label'>
                <h1>Upcoming getdowns</h1>
                <Link
                  to={`/groups/${group.id}`}
                  style={{
                    textDecoration: 'none',
                    color:'blue'
                  }}>
                  See all
                </Link>
              </div>
              <EventIndexContainer itemSize={"small"}/>
            </div>





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
