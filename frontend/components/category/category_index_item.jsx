import React from 'react';
import { Link } from 'react-router-dom';
import * as SplashUtil from '../../util/splash_util';


const CategoryIndexItem = ({category}) => {
  let color = SplashUtil.randomColor();

  return (
    <div className='category-item'>
      <Link
        to={`/discover/categories/${category.id}/groups`}
        style={{color: 'black', textDecoration: 'none'}}
      >

        <div
          className='inner-div-wrapper category-item'
          style={{backgroundColor: color}}>
          <h2>{category.name}</h2>
        </div>

      </Link>
    </div>
  );
};

export default CategoryIndexItem;
