import { connect } from 'react-redux';
import {
  searchGroups,
  fetchGroups,
  clearGroupSearch
} from '../../actions/group_actions';
import { fetchCategories } from '../../actions/category_actions';
import GroupSearch from './group_search';

const mapStateToProps = (state, ownProps) => ({
  groups: Object.keys(state.entities.groups)
    .map(id => state.entities.groups[id]),
  categories: Object.keys(state.entities.categories)
    .map(id => state.entities.categories[id]),
  placeholder: ownProps.placeholder,
  categoryId: ownProps.categoryId
});

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  searchGroups: (group) => dispatch(searchGroups(group)),
  fetchGroups: () => dispatch(fetchGroups()),
  clearGroupSearch: () => dispatch(clearGroupSearch())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupSearch);
