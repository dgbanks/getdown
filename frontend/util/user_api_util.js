
export const updateUser = user => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${user.id}`,
    data: {user}
  })
);



/// USER => CATEGORY

export const joinCategory = categoryId => (
  $.ajax({
    method: 'POST',
    url: `api/categories/${categoryId}/subscriptions`
  })
);

export const leaveCategory = categoryId => (
  $.ajax({
    method: 'DELETE',
    url: `api/categories/${categoryId}/subscriptions`
  })
);

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

// export const fetchGroupUsers = groupId =>(
//   $.ajax({
//     method
//   })
// );

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
