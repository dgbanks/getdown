import { combineReducers } from 'redux';
import GroupsReducer from './groups_reducer';

export const EntitiesReducer = combineReducers({
  groups: GroupsReducer
});
