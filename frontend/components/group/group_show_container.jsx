import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGroup, joinGroup } from '../../actions/group_actions';
import { fetchGroupEvents } from '../../actions/event_actions';
import { toggleSessionModal } from '../../actions/ui_actions';
import GroupShow from './group_show';

const mapStateToProps = (state, ownProps) => ({
  group: state.entities.groups[ownProps.match.params.groupId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  fetchGroupEvents: groupId => dispatch(fetchGroupEvents(groupId)),
  joinGroup: groupId => dispatch(joinGroup(groupId)),
  toggleSessionModal: () => dispatch(toggleSessionModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow));
