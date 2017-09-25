import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllEvents, fetchGroupEvents } from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = state => ({
  events: Object.keys(state.entities.events).map(id => state.entities.events[id]),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchAllEvents: (userId) => dispatch(fetchAllEvents(userId)),
  fetchGroupEvents: (groupId) => dispatch(fetchGroupEvents(groupId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
