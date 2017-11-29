import { connect } from 'react-redux';
import { signup, clearErrors } from '../../actions/session_actions';
import fetchCategories from '../../actions/category_actions';
import UserForm from './user_form';

const mapStateToProps = (state, ownProps) => ({
  categories: Object.values(state.entities.categories),
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors())
  // fetchCategories: () => dispatch(fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm);
