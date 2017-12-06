import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleSessionModal } from '../../actions/ui_actions';
import Homepage from './homepage';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  toggleSessionModal: () => dispatch(toggleSessionModal())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage));
