// fetchCategories
// fetchCategory
// fetchUserInterests

export const fetchCategories = () => (
  $.ajax({
    method: 'GET',
    url: 'api/categories'
  })
);

export const fetchGroupCategories = id => (
  $.ajax({
    method: 'GET',
    url: `api/categories/${id}/groups`
  })
);

export const fetchCategory = id => (
  $.ajax({
    method: 'GET',
    url: `api/categories/${id}`
  })
);
