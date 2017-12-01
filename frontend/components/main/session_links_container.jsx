import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import { toggleSessionModal } from '../../actions/ui_actions';
import SessionLinks from './session_links';

const mapStateToProps = (state, ownProps) => ({
  modalIsOpen: state.ui.sessionModalIsOpen,
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  toggleSessionModal: () => dispatch(toggleSessionModal())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionLinks);
