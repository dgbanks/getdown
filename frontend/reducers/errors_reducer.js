import { combineReducers } from 'redux';
import { SessionErrorsReducer } from './session_errors_reducer';
import { EntityErrorsReducer } from './entity_errors_reducer';

export const ErrorsReducer = combineReducers({
  session: SessionErrorsReducer,
  entities: EntityErrorsReducer
});
