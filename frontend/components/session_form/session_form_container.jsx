import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import { toggleSessionModal } from '../../actions/ui_actions';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session,
    loginModalOpen: state.ui.loginModalOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    toggleSessionModal: () => dispatch(toggleSessionModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
