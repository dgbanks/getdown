import { connect } from 'react-redux';
import { searchGroups, fetchGroups, clearGroupSearch } from '../../actions/group_actions';
import GroupSearch from './group_search';

const mapStateToProps = state => ({
  groups: Object.keys(state.entities.groups).map(id => state.entities.groups[id])
});

const mapDispatchToProps = dispatch => ({
  searchGroups: (group) => dispatch(searchGroups(group)),
  fetchGroups: () => dispatch(fetchGroups()),
  clearGroupSearch: () => dispatch(clearGroupSearch())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupSearch);
