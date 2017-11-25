import React from 'react';
import {
  Link,
  withRouter
} from 'react-router-dom';
import * as SplashUtil from '../../util/splash_util';


const CategoryIndexItem = ({category}) => {
  let color = SplashUtil.randomColor();
  let width = '200px';
  let margin = 0;


  const getRandomStyles = () => {
    SplashUtil.insertKeyframes(width, margin);

    return (
      {
        position: 'absolute',
        height: '25px',
        zIndex: '1',
        backgroundColor: color,
        mixBlendMode: 'multiply',
        // opacity: SplashUtil.randomOpacity(),
        width: `${width}px`,
        marginTop: `${margin}px`,
        marginLeft: `-${width}px`,
        animationName: `moveStripe`,
        animationDuration: `${SplashUtil.randomTime()}s`,
        // animationDelay: `${SplashUtil.randomDelay()}s`,
        // animationFillMode: 'none',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
        animationTimingFunction: 'linear'
      }
    );
  };

  const makeStripe = () => {
    return (
      <div className='single-stripe other-class' style={getRandomStyles()}>
        {category.name}
      </div>
    );
  };

  const eightStripes = () => {
    let count = 0;
    const array = [];
    while (count < 8) {
      array.push(makeStripe());
      count ++;
      margin = margin + 25;
    }
    return array;
  };

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
