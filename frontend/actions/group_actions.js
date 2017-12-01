import * as GroupApiUtil from '../util/group_api_util';
import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_GROUPS = "RECEIVE_GROUPS";
export const RECEIVE_GROUP = "RECEIVE_GROUP";
export const REMOVE_GROUP = "REMOVE_GROUP";
export const CLEAR_GROUPS = "CLEAR_GROUPS";
export const RECEIVE_GROUP_ERRORS = "RECEIVE_GROUP_ERRORS";

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

const receiveGroupErrors = errors => ({
  type: RECEIVE_GROUP_ERRORS,
  errors
});

// USER

// export const joinGroup = groupId => dispatch => (
//   UserApiUtil.joinGroup(groupId)
//     .then(group => dispatch(receiveGroup(group)))
// );

/// INDEX AND SHOW THUNKS

export const fetchGroups = () => dispatch => (
  GroupApiUtil.fetchGroups()
    .then(groups => dispatch(receiveGroups(groups)))
);

export const fetchGroup = id => dispatch => (
  GroupApiUtil.fetchGroup(id)
    .then(group => dispatch(receiveGroup(group)))
);

export const fetchUserGroups = userId => dispatch => (
  GroupApiUtil.fetchUserGroups(userId)
    .then(groups => dispatch(receiveGroups(groups)))
);

export const fetchCategoryGroups = categoryId => dispatch => (
  GroupApiUtil.fetchCategoryGroups(categoryId)
    .then(groups => dispatch(receiveGroups(groups)))
);

/// FORM THUNKS

export const createGroup = group => dispatch => (
  GroupApiUtil.createGroup(group)
    .then(newGroup => dispatch(receiveGroup(newGroup))),
    errors => dispatch(receiveGroupErrors(errors.responseJSON))
);

export const updateGroup = group => dispatch => (
  GroupApiUtil.updateGroup(group)
    .then(newGroup => dispatch(receiveGroup(newGroup)))
);

export const deleteGroup = id => dispatch => (
  GroupApiUtil.deleteGroup(id)
    .then(group => dispatch(removeGroup(group)))
);

/// GROUP SEARCH

export const searchGroups = group => dispatch => (
  GroupApiUtil.searchGroups(group)
    .then(groups => dispatch(receiveGroups(groups)))
);

export const clearGroupSearch = () => ({
  type: CLEAR_GROUPS
});
