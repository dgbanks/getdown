import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchEvents,
  fetchGroupEvents,
  fetchUserEvents
} from '../../actions/event_actions';
import EventIndex from './event_index';

const mapStateToProps = (state, ownProps) => ({
  events: Object.keys(state.entities.events)
    .map(id => state.entities.events[id])
    .sort(function (a, b) {
      if (a.date < b.date) { return -1; }
      if (a.date > b.date) { return 1; }
      return 0;
    }),
  // groupId: ownProps.groupId,
  currentUser: state.session.currentUser,
  itemSize: ownProps.itemSize

});

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchGroupEvents: (groupId) => dispatch(fetchGroupEvents(groupId)),
  fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EventIndex));
