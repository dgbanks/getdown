import React from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';

const CategoryIndexItem = ({category}) => {
  return (
    <div className='category-index-item'>
      <Link
        to={`/categories/${category.id}`}
        style={{color: 'black', textDecoration: 'none'}}
      >

        <div className='inner-div-wrapper category-item'>
          {category.name}
        </div>

      </Link>
    </div>
  );
};

export default CategoryIndexItem;
