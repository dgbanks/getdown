import {connect} from 'react-redux';
import { createGroup, userGroups } from '../../actions/group_actions';
import {createEvent } from '../../actions/event_actions';
import { updateUser } from '../../actions/user_actions';
import { logout } from '../../actions/session_actions';
import { toggleGetdownModal } from '../../actions/ui_actions';
import DashboardMenu from './dashboard_menu';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  modalIsOpen: state.ui.getdownModalIsOpen,
  errors: state.errors.entities
});

const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group)),
  createEvent: event => dispatch(createEvent(event)),
  logout: () => dispatch(logout()),
  toggleGetdownModal: () => dispatch(toggleGetdownModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardMenu);
