export const joinGroup = id => (
  $.ajax({
    method: 'POST',
    url: `api/groups/${id}/memberships`
  })
);

export const leaveGroup = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/groups/${id}/memberships`
  })
);
