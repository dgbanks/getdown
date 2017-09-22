import { connect } from 'react-redux';
import SessionForm from './session_form';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors.session
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  

  return {
    processForm:
    formType:
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
