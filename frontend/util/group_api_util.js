/// INDEX

export const fetchGroups = () => (
  $.ajax({
    method: 'GET',
    url: 'api/groups'
  })
);

export const fetchCategoryGroups = categoryId => (
  $.ajax({
    method: 'GET',
    url: `api/categories/${categoryId}/groups`
  })
);

/// DASHBOARD MENU

export const createGroup = group => (
  $.ajax({
    method: 'POST',
    url: 'api/groups',
    data: {group}
  })
);

export const fetchUserGroups = userId => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/groups`,
  })
);

/// GROUP SHOW

export const fetchGroup = id => (
  $.ajax({
    method: 'GET',
    url: `api/groups/${id}`
  })
);

export const updateGroup = group => (
  $.ajax({
    method: 'PATCH',
    url: `api/groups/${group.id}`,
    data: {group}
  })
);

export const deleteGroup = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/groups/${id}`
  })
);

/// SEARCH GROUP

export const searchGroups = group => (
  $.ajax({
    method: 'POST',
    url: 'api/groups/search',
    data: group
  })
);
