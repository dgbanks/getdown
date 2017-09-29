import { RECEIVE_GROUPS, RECEIVE_GROUP, REMOVE_GROUP, CLEAR_GROUPS } from '../actions/group_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import merge from 'lodash/merge';

const GroupsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_GROUPS:
      return merge({}, action.groups);
    case RECEIVE_GROUP:
      return merge({}, prevState, {[action.group.id]: action.group});
    case REMOVE_GROUP:
      let newState = merge({}, prevState);
      delete newState[action.group.id];
      return newState;
    case CLEAR_GROUPS:
      return {};
    default:
      return prevState;
  }
};

export default GroupsReducer;
