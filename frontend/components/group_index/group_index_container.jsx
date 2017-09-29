import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGroups, fetchUserGroups } from '../../actions/group_actions';
import GroupIndex from './group_index';

const mapStateToProps = state => ({
  groups: Object.keys(state.entities.groups).map(id => state.entities.groups[id]),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  fetchUserGroups: userId => dispatch(fetchUserGroups(userId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex));
