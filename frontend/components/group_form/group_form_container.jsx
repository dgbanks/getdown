import { connect } from 'react-redux';
import { createGroup, updateGroup } from '../../actions/group_actions';
import { toggleUserModal } from '../../actions/ui_actions';

const mapStateToProps = state => ({
  group: state.entities
});

const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group)),
  updateGroup: group => dispatch(updateGroup(group))
});
