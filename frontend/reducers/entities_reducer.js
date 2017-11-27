import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import GroupsReducer from './groups_reducer';
import EventsReducer from './events_reducer';
import CategoriesReducer from './categories_reducer';

export const EntitiesReducer = combineReducers({
  users: UsersReducer,
  groups: GroupsReducer,
  events: EventsReducer,
  categories: CategoriesReducer
});
