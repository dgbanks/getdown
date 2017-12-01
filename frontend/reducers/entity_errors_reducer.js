import { RECEIVE_GROUP_ERRORS } from '../actions/group_actions';
import { RECEIVE_EVENT_ERRORS } from '../actions/event_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

export const EntityErrorsReducer = (prevState = [], action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_GROUP_ERRORS:
      return action.errors;
    case RECEIVE_EVENT_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return prevState;
  }
};
