import React from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';
import * as SplashUtil from '../../util/splash_util';


const CategoryIndexItem = ({category}) => {
  let color = SplashUtil.randomColor();

  // console.log(this.props.categories);

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









//
// class CategoryIndexItem extends React.Component {
//   constructor() {
//     this.color = SplashUtil.randomColor();
//     this.width = '200px';
//     this.margin = 0;
//   }
//
//   render() {
//     return (
//       <div className='category-item'>
//         <Link
//           to={`/categories/${category.id}/groups`}
//           style={{
//             color: 'black',
//             textDecoration: 'none'}}>
//
//           <div className='inner-div-wrapper category-item'>
//             <h2>{category.name}</h2>
//           </div>
//
//         </Link>
//       </div>
//     );
//   }
// }
