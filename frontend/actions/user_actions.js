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

export const subscribe = categoryId => dispatch => (
  UserApiUtil.joinCategory(categoryId)
    .then(user => dispatch(receiveUser(user)))
);

export const unsubscribe = categoryId => dispatch => (
  UserApiUtil.leaveCategory(categoryId)
    .then(user => dispatch(receiveUser(user)))
);

export const joinGroup = groupId => dispatch => (
  UserApiUtil.joinGroup(groupId)
    .then(user => dispatch(receiveUser(user)))
);

export const leaveGroup = groupId => dispatch => (
  UserApiUtil.leaveGroup(groupId)
    .then(user => dispatch(removeUser(user)))
);

export const joinEvent = eventId => dispatch => (
  UserApiUtil.joinEvent(eventId)
    .then(user => dispatch(receiveUser(user)))
);

export const leaveEvent = eventId => dispatch => (
  UserApiUtil.leaveEvent(eventId)
    .then(user => dispatch(receiveUser(user)))
);

export const updateUser = userId => dispatch => (
  UserApiUtil.updateUser(userId)
    .then(user => dispatch(receiveUser(user)))
);
