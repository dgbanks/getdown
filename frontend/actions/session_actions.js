import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const login = user => dispatch => (
  SessionApiUtil.login(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(() => dispatch(receiveCurrentUser(null)), (err) => dispatch(receiveSessionErrors(err.receiveJSON)))
);

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(currentUser => dispatch(receiveCurrentUser(currentUser)))
);

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});
