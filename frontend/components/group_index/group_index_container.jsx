import { connect } from 'react-redux';
import { fetchGroups } from '../../actions/group_actions';
import GroupIndex from './group_index';

const mapStateToProps = state => ({
  groups: Object.keys(state.entities.groups).map(id => state.entities.groups[id])
});

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex);
