export const fetchAllEvents = (userId) => (
  $.ajax({
    method: 'GET',
    url: 'api/events',
    data: {userId}
  })
);

export const fetchGroupEvents = (groupId, filter) => (
  $.ajax({
    method: 'GET',
    url: `api/groups/${groupId}/events`,
    data: {filter}
  })
);

export const fetchEvent = id => (
  $.ajax({
    method: 'GET',
    url: 'api/events/:id'
  })
);
