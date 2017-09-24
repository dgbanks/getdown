export const fetchGroups = groups => (
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
