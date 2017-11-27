import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGroups, fetchUserGroups, fetchCategoryGroups } from '../../actions/group_actions';
import GroupIndex from './group_index';

const mapStateToProps = (state, ownProps) => ({
  groups: Object.keys(state.entities.groups)
    .map(id => state.entities.groups[id]),
  currentUser: state.session.currentUser,
  categoryId: ownProps.categoryId
});

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups()),
  fetchUserGroups: userId => dispatch(fetchUserGroups(userId)),
  fetchCategoryGroups: categoryId => dispatch(fetchCategoryGroups(categoryId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex));
