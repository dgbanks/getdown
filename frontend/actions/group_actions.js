import * as GroupApiUtil from '../util/group_api_util';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";

const receiveGroups = groups => ({
  type: RECEIVE_GROUPS,
  groups
});

const receiveGroup = group => ({
  type: RECEIVE_GROUP,
  group
});

const removeGroup = group => ({
  type: REMOVE_GROUP,
  group
});

/// INDEX AND SHOW THUNKS

export const fetchGroups = () => dispatch => (
  GroupApiUtil.fetchGroups().then(groups => dispatch(receiveGroups(groups)))
);

export const fetchGroup = id => dispatch => (
  GroupApiUtil.fetchGroup(id).then(group => dispatch(receiveGroup(group)))
);

/// FORM THUNKS

export const createGroup = group => dispatch => (
  GroupApiUtil.createGroup(group).then(group => dispatch(receiveGroup(group)))
);

export const updateGroup = group => dispatch => (
  GroupApiUtil.updateGroup(group).then(group => dispatch(receiveGroup(group)))
);

export const deleteGroup = id => dispatch => (
  GroupApiUtil.deleteGroup(id).then(group => dispatch(removeGroup(group)))
);
