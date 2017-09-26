import { TOGGLE_SESSION_MODAL } from '../actions/ui_actions';
import merge from 'lodash/merge';

export const UIReducer = (prevState = {loginModalOpen: false}, action) => {
  Object.freeze(prevState);
  let newState = merge({}, prevState);
  switch (action.type) {
    case TOGGLE_SESSION_MODAL:
      newState.loginModalOpen = !(newState.loginModalOpen);
      return newState;
    default:
      return prevState;
  }
};
