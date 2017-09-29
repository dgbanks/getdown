import { connect } from 'react-redux';
import { createEvent, updateEvent } from '../../actions/event_actions';
import EventForm from './event_form';

const mapStateToProps = (state, ownProps) => ({

});


const mapDispatchToProps = dispatch => ({
  createEvent: event => dispatch(createEvent(event)),
  updateEvent: event => dispatch(updateEvent(event)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventForm);
