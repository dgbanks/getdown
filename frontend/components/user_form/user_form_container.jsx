import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import UserForm from './user_form';

const mapStateToProps = (state, ownProps) => {
  return {
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
