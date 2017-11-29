import { TOGGLE_MODAL } from '../actions/ui_actions';
import merge from 'lodash/merge';

export const UIReducer = (prevState = {modalIsOpen: false}, action) => {
  Object.freeze(prevState);
  let newState = merge({}, prevState);
  switch (action.type) {
    case TOGGLE_MODAL:
      newState.modalIsOpen = !(newState.modalIsOpen);
      return newState;
    default:
      return prevState;
  }
};
