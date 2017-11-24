import React from 'react';
import { Link } from 'react-router-dom';
import GroupIndexContainer from '../group_index/group_index_container';
import GroupSearchContainer from '../group_search/group_search_container';
import * as SplashUtil from '../../util/splash_util';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
    this.margin = 0;
    this.colors = ['rgb(255, 255, 0)', 'rgb(255, 0, 255)', 'rgb(0, 255, 255)'];
    this.color = SplashUtil.randomColor();
  }

  getRandomStyles() {
    let width = 1500;
    SplashUtil.insertKeyframes(width);

    return (
      {
        position: 'absolute',
        height: 'inherit',
        zIndex: '1',
        backgroundColor: this.color,
        mixBlendMode: 'multiply',
        opacity: '.3',
        width: `${width}px`,
        // marginTop: `${this.margin}px`,
        marginLeft: `-${width}`,
        // marginLeft: SplashUtil.randomPosition(width),
        animationName: 'moveStripe',
        animationDuration: `${SplashUtil.randomTime()}s`,
        animationDelay: `${SplashUtil.randomDelay()}s`,
        animationFillMode: 'none',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
        animationTimingFunction: 'linear'
      }
    );
  }

  makeStripe() {
    return (
      <div style={this.getRandomStyles()}></div>
    );
  }

  eightStripes() {
    let count = 0;
    console.log('make a stripe');
    const array = [];
    while (count < 3) {
      array.push(this.makeStripe());
      count ++;
      // this.margin += 50;
    }
    return array;
  }

  componentDidMount() {
  this.props.fetchCategory(this.props.match.params.categoryId);
  }

  render() {
    console.log(this.props.match.params.categoryId);
    const category = this.props.category;
    if (category === undefined) {
      return (
        <div>loading...</div>
      );
    }
    console.log(category.id);
    // return (
    //   <div className='category-page'>
    //
    //     <div className='category-header'>
    //       <div className='category-header-text'><h1>{category.name}</h1></div>
    //     </div>
    //
    //     <GroupSearchContainer />
    //
    //     <GroupIndexContainer categoryId={category.id}/>
    //
    //   </div>
    // );

    return (
      <div className='category-header'>
        {this.eightStripes()}
        <div className='category-header-text'><h1>{category.name}</h1></div>
      </div>
    );
  }
}

export default CategoryShow;
