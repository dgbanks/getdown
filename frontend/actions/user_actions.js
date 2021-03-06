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

export const subscribeToCategory = categoryId => dispatch => (
  UserApiUtil.joinCategory(categoryId).then(
    user => dispatch(receiveUser(user))
  )
);

export const unsubscribeFromCategory = categoryId => dispatch => (
  UserApiUtil.leaveCategory(categoryId).then(
    user => dispatch(removeUser(user))
  )
);

export const joinGroup = groupId => dispatch => (
  UserApiUtil.joinGroup(groupId).then(
    user => dispatch(receiveUser(user))
  )
);

export const leaveGroup = groupId => dispatch => (
  UserApiUtil.leaveGroup(groupId).then(
    user => dispatch(removeUser(user))
  )
);

export const rsvpToEvent = eventId => dispatch => (
  UserApiUtil.joinEvent(eventId).then(
    user => dispatch(receiveUser(user))
  )
);

export const skipEvent = eventId => dispatch => (
  UserApiUtil.leaveEvent(eventId).then(
    user => dispatch(removeUser(user))
  )
);

export const updateUser = userId => dispatch => (
  UserApiUtil.updateUser(userId).then(
    user => dispatch(receiveUser(user))
  )
);
