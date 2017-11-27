import * as CategoryApiUtil from '../util/category_api_util';

export const RECEIVE_CATEGORY = "RECEIVE_CATEGORY";
export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";


const receiveCategory = category => ({
  type: RECEIVE_CATEGORY,
  category
});

const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});


export const fetchCategory = id => dispatch => (
  CategoryApiUtil.fetchCategory(id)
    .then(category => dispatch(receiveCategory(category)))
);

export const fetchCategories = () => dispatch => (
  CategoryApiUtil.fetchCategories()
    .then(categories => dispatch(receiveCategories(categories)))
);
