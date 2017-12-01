import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCategory } from '../../actions/category_actions';
import { subscribeToCategory, unsubscribeFromCategory } from '../../actions/user_actions';
import { toggleSessionModal } from '../../actions/ui_actions';
import CategoryShow from './category_show';

const mapStateToProps = (state, ownProps) => ({
  category: state.entities.categories[ownProps.categoryId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchCategory: id => dispatch(fetchCategory(id)),
  subscribeToCategory: categoryId => dispatch(subscribeToCategory(categoryId)),
  unsubscribeFromCategory: categoryId => dispatch(unsubscribeFromCategory(categoryId)),
  toggleSessionModal: () => dispatch(toggleSessionModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryShow));
