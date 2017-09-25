import { RECEIVE_GROUPS, RECEIVE_GROUP } from '../actions/group_actions';
import merge from 'lodash/merge';

const GroupsReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_GROUPS:
      return merge({}, action.groups);
    case RECEIVE_GROUP:
      return merge({}, prevState, {[action.group.id]: action.group});
    default:
      return prevState;
  }
};

export default GroupsReducer;
