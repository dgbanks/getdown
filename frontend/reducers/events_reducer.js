import { RECEIVE_EVENTS, RECEIVE_EVENT } from '../actions/event_actions';
import merge from 'lodash/merge';

const EventsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return merge({}, action.events);
    case RECEIVE_EVENT:
      return merge({}, prevState, {[action.event.id]: action.event});
    default:
      return prevState;
  }
};

export default EventsReducer;
