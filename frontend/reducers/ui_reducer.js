import {
  TOGGLE_SESSION_MODAL,
  TOGGLE_GETDOWN_MODAL
} from '../actions/ui_actions';
import merge from 'lodash/merge';

const modal = {
  sessionModalIsOpen: false,
  getdownModalIsOpen: false
};

export const UIReducer = (prevState = modal, action) => {
  Object.freeze(prevState);
  let newState = merge({}, prevState);
  switch (action.type) {
    case TOGGLE_SESSION_MODAL:
      newState.sessionModalIsOpen = !newState.sessionModalIsOpen;
      return newState;
    case TOGGLE_GETDOWN_MODAL:
      newState.getdownModalIsOpen = !newState.getdownModalIsOpen;
      return newState;
    default:
      return prevState;
  }
};
