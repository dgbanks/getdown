import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { rsvpToEvent, skipEvent } from '../../actions/user_actions';
import { fetchEvent } from '../../actions/event_actions';
import { toggleSessionModal } from '../../actions/ui_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.session.currentUser
  });

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  rsvpToEvent: eventId => dispatch(rsvpToEvent(eventId)),
  skipEvent: eventId => dispatch(skipEvent(eventId)),
  toggleSessionModal: () => dispatch(toggleSessionModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow));
