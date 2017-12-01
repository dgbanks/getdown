import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import EventIndexContainer from '../event/event_index_container';
import EventFormContainer from '../event/event_form_container';
import EventShowContainer from '../event/event_show_container';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modalIsOpen: false};
    this.formType = "";

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.isMember = this.isMember.bind(this);
    this.handleCreateEvent = this.handleCreateEvent.bind(this);
    this.handleMembershipChange = this.handleMembershipChange.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.renderMainBody = this.renderMainBody.bind(this);
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
componentDidMount() {
  this.props.fetchGroup(this.props.match.params.groupId);
}

// componentWillReceiveProps(newProps) {
//   console.log('GroupShow.componentWillReceiveProps: newProps=', newProps);
//   this.setState({group: newProps.group});
// }
//
// // componentDidUpdate() {
// //   console.log('GroupShow.componentDidUpdate');
// // }

  isMember() {
    if (this.props.group.isCurrentUserMember) {
      return (
        <p>you are a member</p>
      );
    }
  }

  displayEvents() {
    if (this.props.group.events) {
      return (
        <div className='main-body'>
          <EventIndexContainer groupId={this.props.group.id} />
        </div>
      );
    } else {
      return (
        <p>No upcoming events</p>
      );
    }
  }

  renderNextEvent() {
    if (this.props.group.hasUpcomingEvents) {
      const event = this.props.group.firstEvent;
      return (
        <div className='next-event'>
          <h1>Next Getdown</h1>
          <p>{event.name}</p>
        </div>
      );
    }
  }

  renderMainBody() {
    if (this.props.location.pathname.split('/').includes('events')) {
      console.log('GroupShow.renderMainBody: EVENTS in pathname');
      // let eventId = this.props.location.pathname.split('/').slice(-1)[0];
      this.displayEvents();
      return (
            <EventIndexContainer groupId={this.props.group.id} />
      );
    } else {
      return (
        <div className='body'>

              {this.renderNextEvent()}

              <div className='main-body'>

                <div className='page-details'>
                  <h1>What we're about</h1>
                  <div className='description'>
                    <p>{this.props.group.description}</p>
                  </div>
                </div>

                <div className='group-event-index'>
                  <div className='event-index-label'>
                    <h1>Upcoming getdowns</h1>
                    <Link
                      to={`/groups/${this.props.group.id}/events`}
                      style={{
                        textDecoration: 'none',
                        color:'blue',
                        fontFamily: 'sans-serif',
                        marginTop: '-10px'
                      }}>
                      See all
                    </Link>
                  </div>
                  <EventIndexContainer itemSize={"small"}/>
                </div>

              </div>
        </div>
      );
    }
  }


  handleMembershipChange(action) {
    if (this.props.currentUser) {
      if (action === 'join') {
        this.props.joinGroup(this.props.group.id);
      } else {
        this.props.leaveGroup(this.props.group.id);
      }
      window.location.reload();
    } else {
      this.props.toggleSessionModal();
    }
  }

  handleCreateEvent() {
    console.log("WE'RE GONNA CREATE AN EVENT");
  }

  renderButtons() {
    if (this.props.group.isCurrentUserMember) {
      return (
        <div>
          <button onClick={() => this.handleMembershipChange('leave')}>
            Leave Group
          </button>
          <button onClick={this.handleCreateEvent}>Create Event</button>
        </div>
      );
    } else {
      return (
        <button onClick={() => this.handleMembershipChange('join')}>
          Join Group
        </button>
      );
    }
  }

  render() {
    // console.log('GroupShow.render: this.props.group=', this.props.group);
    // console.log('GroupShow.render: this.state.group=', this.state.group);
    const group = this.props.group;
    if (!group) {
      return (
        <div>loading...</div>
      );
    }

    return (
      <div className='group-page'>

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
                <h2>{group.organizer}</h2>

                <div className='page-actions'>
                  {this.renderButtons()}
                </div>
              </div>

            </div>

            <div className='group-subheader'>
              <div className='subheader-tabs'>

                <div className='hover-text'>
                  <Link
                    to={`/groups/${group.id}`}
                    style={{
                      color: 'inherit',
                      textDecoration: 'inherit'
                    }}>
                    Our group
                  </Link>
                </div>

                <div className='hover-text'>
                  <Link
                    to={`/groups/${group.id}/events`}
                    style={{
                      color: 'inherit',
                      textDecoration: 'inherit'
                    }}>
                    Getdowns
                  </Link>
                </div>

                <div className='hover-text'>
                  <Link
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
          </div>

          {this.renderMainBody()}

          <div className='membership-attendance'>
            {
              this.props.group.members.map(member => (
                <p key={member.id}>{member.name}</p>
              ))
            }
          </div>


      </div>
    );

  }
}

export default GroupShow;
