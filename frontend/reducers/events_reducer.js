import { RECEIVE_EVENTS, RECEIVE_EVENT, REMOVE_EVENT } from '../actions/event_actions';
import merge from 'lodash/merge';

const EventsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return merge({}, action.events);
    case RECEIVE_EVENT:
      return merge({}, prevState, {[action.event.id]: action.event});
    case REMOVE_EVENT:
      let newState = merge({}, prevState);
      delete newState[action.event.id];
      return newState;
    default:
      return prevState;
  }
};

export default EventsReducer;
