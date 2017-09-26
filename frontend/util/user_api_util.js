
/// USER => GROUP

export const joinGroup = groupId => (
  $.ajax({
    method: 'POST',
    url: `api/groups/${groupId}/memberships`
  })
);

export const leaveGroup = groupId => (
  $.ajax({
    method: 'DELETE',
    url: `api/groups/${groupId}/memberships`
  })
);



/// USER => EVENT

export const joinEvent = eventId => (
  $.ajax({
    method: 'POST',
    url: `api/events/${eventId}/rsvps`
  })
);

export const leaveEvent = eventId => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${eventId}/rsvps`
  })
);
