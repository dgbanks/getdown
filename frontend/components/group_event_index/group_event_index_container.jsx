import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGroupEvents } from '../../actions/event_actions';
import GroupEventIndex from './group_event_index';

const mapStateToProps = state => ({
  events: Object.keys(state.entities.events).map(id => state.entities.events[id])
});

const mapDispatchToProps = dispatch => ({
  fetchGroupEvents: (groupId) => dispatch(fetchGroupEvents(groupId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupEventIndex);
