import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";


export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

// thunk: a function used to delay dispatch of an action, or to do so
//// only under certain conditions; a function that returns a function
//// instead of an action

export const signup = user => dispatch => (
  SessionApiUtil.signup(user).then(
    newUser => dispatch(receiveCurrentUser(newUser)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  )
);

export const login = user => dispatch => (
  SessionApiUtil.login(user).then(
    currentUser => dispatch(receiveCurrentUser(currentUser)),
    errors => dispatch(receiveSessionErrors(errors.responseJSON))
  )
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(
    () => dispatch(receiveCurrentUser(null)),
    (errors) => dispatch(receiveSessionErrors(errors.responseJSON))
  )
);
