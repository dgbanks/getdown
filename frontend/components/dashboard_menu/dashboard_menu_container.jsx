import {connect} from 'react-redux';
import { createGroup, userGroups } from '../../actions/group_actions';
import { updateUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import DashboardMenu from './dashboard_menu';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group)),
  userGroups: userId => dispatch(userGroups(userId)),
  updateUser: user => dispatch(updateUser(user)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardMenu);
