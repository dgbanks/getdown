import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCategory } from '../../actions/category_actions';
import CategoryShow from './category_show';

const mapStateToProps = (state, ownProps) => ({
  category: state.entities.categories[ownProps.match.params.categoryId]
});

const mapDispatchToProps = dispatch => ({
  fetchCategory: id => dispatch(fetchCategory(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryShow));
