import { connect } from 'react-redux';
import { createEvent, updateEvent } from '../../actions/event_actions';
import { toggleModal } from '../../actions/ui_actions';
import EventForm from './event_form';

const mapStateToProps = (state, ownProps) => ({
});


const mapDispatchToProps = dispatch => ({
  createEvent: (groupId, event) => dispatch(createEvent(groupId, event)),
  updateEvent: event => dispatch(updateEvent(event)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
