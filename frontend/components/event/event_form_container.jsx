import { connect } from 'react-redux';
import { createEvent, updateEvent } from '../../actions/event_actions';
import { toggleSessionModal } from '../../actions/ui_actions';
import EventForm from './event_form';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.entities,
  pathname: ownProps.pathname,
  currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
  createEvent: (groupId, event) => dispatch(createEvent(groupId, event)),
  updateEvent: event => dispatch(updateEvent(event))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
