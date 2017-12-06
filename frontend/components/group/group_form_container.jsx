import { connect } from 'react-redux';
import { createGroup, updateGroup } from '../../actions/group_actions';
import GroupForm from './group_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.entities,
  currentUser: state.session.currentUser,
  categories: ownProps.categories
});


const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group)),
  updateGroup: group => dispatch(updateGroup(group)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupForm);
