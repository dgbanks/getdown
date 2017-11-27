import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import {fetchUserEvents} from '../../actions/event_actions';
import { fetchCategory } from '../../actions/category_actions';
import Discover from './discover';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  category: state.entities.categories[ownProps.match.params.categoryId]
});

const mapDispatchToProps = dispatch => ({
  // fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId)),
  fetchCategory: categoryId => dispatch(fetchCategory(categoryId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover));
