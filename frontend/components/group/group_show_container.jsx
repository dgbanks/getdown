import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { joinGroup, leaveGroup } from '../../actions/user_actions';
import { fetchGroup } from '../../actions/group_actions';
import { fetchGroupEvents } from '../../actions/event_actions';
import { toggleSessionModal } from '../../actions/ui_actions';
import GroupShow from './group_show';

const mapStateToProps = (state, ownProps) => ({
  group: state.entities.groups[ownProps.match.params.groupId],
  // currentMember: state.entities.groups[ownProps.match.params.groupId]
  //   .isCurrentUserMember,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  fetchGroupEvents: groupId => dispatch(fetchGroupEvents(groupId)),
  joinGroup: groupId => dispatch(joinGroup(groupId)),
  leaveGroup: groupId => dispatch(leaveGroup(groupId)),
  toggleSessionModal: () => dispatch(toggleSessionModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow));
