import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEvent, joinEvent } from '../../actions/event_actions';
import { toggleSessionModal } from '../../actions/ui_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => ({
    event: state.entities.events[ownProps.match.params.eventId],
    currentUser: state.session.currentUser
  });

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  joinEvent: eventId => dispatch(joinEvent(eventId)),
  toggleSessionModal: () => dispatch(toggleSessionModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow));
