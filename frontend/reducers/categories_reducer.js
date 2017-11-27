import {
  RECEIVE_CATEGORY,
  RECEIVE_CATEGORIES } from '../actions/category_actions';
import merge from 'lodash/merge';

const CategoriesReducer = (prevState = {}, action) => {
  Object.freeze(prevState);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return merge({}, action.categories);
    case RECEIVE_CATEGORY:
      return merge({}, prevState, {[action.category.id]: action.category});
    default:
      return prevState;
  }
};

export default CategoriesReducer;
