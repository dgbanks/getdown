//refacttor the optional userId into separate actions


export const fetchEvents = (userId) => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {userId}
  })
);

export const fetchEvent = id => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

export const fetchGroupEvents = (groupId) => (
  $.ajax({
    method: 'GET',
    url: `api/groups/${groupId}/events`,
  })
);

export const fetchUserEvents = (userId) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${userId}/events`,
  })
);
