import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchGroup } from '../../actions/group_actions';
import GroupShow from './group_show';

const mapStateToProps = (state, ownProps) => ({
  group: state.entities.groups[ownProps.match.params.groupId]
});

const mapDispatchToProps = dispatch => ({
  fetchGroup: id => dispatch(fetchGroup(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupShow));
