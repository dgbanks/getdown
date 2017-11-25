import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Discover from './discover';
import {fetchUserEvents} from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  categories: Object.keys(state.entities.categories)
    .map(id => state.entities.categories[id])
});

const mapDispatchToProps = dispatch => ({
  fetchUserEvents: (userId) => dispatch(fetchUserEvents(userId)),
  fetchCategories: () => dispatch(fetchCategories())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover));
