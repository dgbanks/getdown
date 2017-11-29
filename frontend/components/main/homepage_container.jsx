import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleModal } from '../../actions/ui_actions';
import Homepage from './homepage';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  toggleModal: () => dispatch(toggleModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage));
