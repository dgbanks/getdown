import merge from 'lodash/merge';
import {
  RECEIVE_SESSION_ERRORS,
  CLEAR_ERRORS } from '../actions/session_actions';

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
