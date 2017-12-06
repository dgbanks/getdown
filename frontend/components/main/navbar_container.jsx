import {connect} from 'react-redux';
import NavBar from './navbar';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  categories: Object.values(state.entities.categories)
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
