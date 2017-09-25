import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import GroupsReducer from './groups_reducer';

export const EntitiesReducer = combineReducers({
  users: UsersReducer,
  groups: GroupsReducer
});
