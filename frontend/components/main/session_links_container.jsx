import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import { toggleSessionModal } from '../../actions/ui_actions';
import SessionLinks from './session_links';

const mapStateToProps = (state, ownProps) => ({
  modalIsOpen: state.ui.sessionModalIsOpen,
  errors: state.errors.session,
  categories: ownProps.categories
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(clearErrors()),
  toggleSessionModal: () => dispatch(toggleSessionModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionLinks);
