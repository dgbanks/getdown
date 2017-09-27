/// INDEX & SHOW

export const fetchGroups = () => (
  $.ajax({
    method: 'GET',
    url: 'api/groups'
  })
);

export const fetchGroup = id => (
  $.ajax({
    method: 'GET',
    url: `api/groups/${id}`
  })
);

/// GROUP FORM UTILS

export const createGroup = group => (
  $.ajax({
    method: 'POST',
    url: 'api/groups',
    data: {group}
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
