import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { joinGroup } from '../../actions/group_actions';
import { fetchGroup } from '../../actions/group_actions';
import { fetchGroupEvents } from '../../actions/event_actions';
import { toggleModal } from '../../actions/ui_actions';
import GroupShow from './group_show';

const mapStateToProps = (state, ownProps) => ({
  group: state.entities.groups[ownProps.match.params.groupId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id)),
  fetchGroupEvents: groupId => dispatch(fetchGroupEvents(groupId)),
  joinGroup: groupId => dispatch(joinGroup(groupId)),
  toggleModal: () => dispatch(toggleModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow));
