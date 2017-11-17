import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  fetchCategory,
  fetchCategories
} from '../../actions/category_actions';
import CategoryIndex from './category_index';

const mapStateToProps = state => ({
  categories: Object.keys(state.entities.categories)
    .map(id => state.entities.categories[id])
});

const mapDispatchToProps = dispatch => ({
  fetchCategory: (id) => dispatch(fetchCategory(id)),
  fetchCategories: () => dispatch(fetchCategories())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryIndex));
