import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGroups } from '../../actions/group_actions';
import GroupIndex from './group_index';

const mapStateToProps = state => ({
  groups: Object.keys(state.entities.groups).map(id => state.entities.groups[id])
});

const mapDispatchToProps = dispatch => ({
  fetchGroups: () => dispatch(fetchGroups())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupIndex));
