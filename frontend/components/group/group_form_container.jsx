import { connect } from 'react-redux';
import { createGroup, updateGroup } from '../../actions/group_actions';
import { toggleSessionModal } from '../../actions/ui_actions';
import GroupForm from './group_form';

const mapStateToProps = (state, ownProps) => ({

});


const mapDispatchToProps = dispatch => ({
  createGroup: group => dispatch(createGroup(group)),
  updateGroup: group => dispatch(updateGroup(group)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroupForm);
