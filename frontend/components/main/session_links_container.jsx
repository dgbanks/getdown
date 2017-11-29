import { connect } from 'react-redux';
import { login, signup, clearErrors } from '../../actions/session_actions';
import { toggleSessionModal } from '../../actions/ui_actions';
import SessionLinks from './session_links';

const mapStateToProps = (state, ownProps) => {
  return {
    modalIsOpen: state.ui.modalIsOpen
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearErrors()),
    toggleSessionModal: () => dispatch(toggleSessionModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionLinks);
