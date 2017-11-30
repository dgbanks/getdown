import { RECEIVE_USER, REMOVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const UsersReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, prevState, {users: {[action.user.id]: action.user} });
    case REMOVE_USER:
      let newState = merge({}, prevState);
      delete newState[action.user.id];
      return newState;
    default:
      return prevState;
  }
};
