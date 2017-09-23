import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import SignupModal from './signup_modal';
import LoginModal from './login_modal';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.match.params;
  const processForm = (formType === 'login') ? login : signup;
  return {
    formType: user => dispatch(processForm(user)),
    processForm
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
