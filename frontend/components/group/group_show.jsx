import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import EventIndexContainer from '../event/event_index_container';
import EventFormContainer from '../event/event_form_container';
import EventShowContainer from '../event/event_show_container';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);

    this.isMember = this.isMember.bind(this);
    this.handleMembershipChange = this.handleMembershipChange.bind(this);
    this.renderButtons = this.renderButtons.bind(this);
    this.renderMainBody = this.renderMainBody.bind(this);
    this.renderMembers = this.renderMembers.bind(this);
  }

componentDidMount() {
  this.props.fetchGroup(this.props.match.params.groupId);
}

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
      this.displayEvents();
      return (
        <EventIndexContainer groupId={this.props.group.id} />
      );
    } else if (this.props.location.pathname.split('/').includes('members')) {
      return (
        <div className='body'>
          {this.renderMembers(this.props.group)}
        </div>
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

              {this.renderMembers(this.props.group)}

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
      console.log('please render the type for tsm:', this.props.toggleSessionModal.type);
      this.props.toggleSessionModal();
    }
  }

  renderButtons() {
    if (this.props.group.isCurrentUserMember) {
      return (
        <div>
          <button onClick={() => this.handleMembershipChange('leave')}>
            Leave Group
          </button>
          <button onClick={this.props.toggleGetdownModal}>Create Event</button>
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

  renderUserRole(member, group) {
    if (group.organizer === member.name) {
      return 'Organizer';
    } else {
      return 'Member';
    }
  }

  renderMembers(group) {
    return (
      <div className='membership'>
        <h1>Members</h1>
        <div className='members-grid'>
        {
          group.members.map(member => (
            <div key={member.id} className='associated-user'>
              <h2>{member.name}</h2>
              <h3>{this.renderUserRole(member, group)}</h3>
            </div>
            ))
          }
        </div>
      </div>
    );
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
                    to={`/groups/${group.id}/members`}
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

      </div>
    );

  }
}

export default GroupShow;
