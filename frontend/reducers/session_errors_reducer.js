import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { CLEAR_ERRORS } from '../actions/error_actions';

export const SessionErrorsReducer = (prevState = [], action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return prevState;
  }
};
