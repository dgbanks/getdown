import {connect} from 'react-redux';
// import { logout } from '../../actions/session_actions';
// import { fetchCategories } from '../../actions/category_actions';
import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  categories: Object.values(state.entities.categories)
});

const mapDispatchToProps = dispatch => ({
  // fetchCategories: () => dispatch(fetchCategories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
