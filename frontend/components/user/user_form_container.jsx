import { connect } from 'react-redux';
import { clearErrors } from '../../actions/error_actions';
import { signup } from '../../actions/session_actions';
import fetchCategories from '../../actions/category_actions';
import UserForm from './user_form';

const mapStateToProps = (state, ownProps) => ({
  categories: ownProps.categories,
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
