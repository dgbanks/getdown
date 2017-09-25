import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const REMOVE_USER = "REMOVE_USER";

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const removeUser = user => ({
  type: REMOVE_USER,
  user
});

export const joinGroup = id => dispatch => (
  UserApiUtil.joinGroup(id).then(user => dispatch(receiveUser(user)))
);

export const leaveGroup = id => dispatch => (
  UserApiUtil.leaveGroup(id).then(user => dispatch(removeUser(user)))
);
