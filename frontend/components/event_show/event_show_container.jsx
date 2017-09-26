import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEvent } from '../../actions/event_actions';
import { joinEvent } from '../../actions/user_actions';
import EventShow from './event_show';

const mapStateToProps = (state, ownProps) => ({
  event: state.entities.events[ownProps.match.params.eventId]
});

const mapDispatchToProps = dispatch => ({
  fetchEvent: id => dispatch(fetchEvent(id)),
  joinEvent: eventId => dispatch(joinEvent(eventId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventShow));
