//refacttor the optional userId into separate actions

/// INDEX

export const fetchEvents = (userId) => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {userId}
  })
);

export const fetchUserEvents = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/events`,
  })
);

export const fetchCategoryEvents = categoryId => (
  $.ajax({
    method: 'GET',
    url: `api/categories/${categoryId}/events`
  })
);

/// EVENT SHOW

export const fetchEvent = id => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

/// GROUP SHOW

export const fetchGroupEvents = (groupId) => (
  $.ajax({
    method: 'GET',
    url: `api/groups/${groupId}/events`,
  })
);

export const createEvent = (groupId, event) => (
  $.ajax({
    method: 'POST',
    url: `api/groups/${groupId}/events`,
    data: {event}
  })
);
