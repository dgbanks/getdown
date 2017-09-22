import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

export const SessionReducer = (prevState = {currentUser: null}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, prevState, {currentUser: action.currentUser});
    default:
      return prevState;
  }
};
