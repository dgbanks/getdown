import React from 'react';
import { Link } from 'react-router-dom';
import * as SplashUtil from '../../util/splash_util';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
    // this.margin = 0;
    this.colors = ['rgb(255, 255, 0)', 'rgb(255, 0, 255)', 'rgb(0, 255, 255)'];
    this.color = SplashUtil.randomColor();
    // console.log(this.props.category, "constructor of categoryShow");
  }

  // getRandomStyles() {
  //   let width = 1500;
  //   SplashUtil.insertKeyframes(width);
  //
  //   return (
  //     {
  //       position: 'absolute',
  //       height: 'inherit',
  //       zIndex: '1',
  //       backgroundColor: this.color,
  //       mixBlendMode: 'multiply',
  //       opacity: '.3',
  //       width: `${width}px`,
  //       // marginTop: `${this.margin}px`,
  //       marginLeft: `-${width}px`,
  //       // marginLeft: SplashUtil.randomPosition(width),
  //       animationName: 'moveStripe',
  //       animationDuration: `${SplashUtil.randomTime()}s`,
  //       animationDelay: `${SplashUtil.randomDelay()}s`,
  //       animationFillMode: 'none',
  //       animationIterationCount: 'infinite',
  //       animationDirection: 'alternate',
  //       animationTimingFunction: 'linear'
  //     }
  //   );
  // }
  //
  // makeStripe(num) {
  //   return (
  //     <div key={num} style={this.getRandomStyles()}></div>
  //   );
  // }
  //
  // threeStripes() {
  //   let count = 0;
  //   const array = [];
  //   while (count < 3) {
  //     array.push(this.makeStripe(count));
  //     count ++;
  //   }
  //   return array;
  // }

  // componentWillMount() {
  //   console.log('CategoryShow.componentWillMount: this.props.category=', this.props.category);
  //
  // // this.props.fetchCategory(this.props.match.params.categoryId);
  // }

  handleSubscribe(magicWord) {
    if (magicWord === 'subscribe') {
      if (this.props.currentUser) {
        this.props.subscribeToCategory(this.props.category.id);
      } else {
        // open the modal!!!
      }
    } else {
      this.props.unsubscribeFromCategory(this.props.categoryId);
    }
  }

  renderButtons(category) {
    if (this.props.category.isCurrentUserSubscriber) {
      return (
        <div className='category-actions page-actions'>
          <button onClick={() => this.handleSubscribe('unsubscribe')}>
            Not Interested
          </button>
          <h2>You and {`${category.subscriptionCount - 1} others are interested`}</h2>
        </div>
      );
    } else {
      return (
        <div className='category-actions page-actions'>
          <button onClick={() => this.handleSubscribe('subscribe')}>
            I'm Interested
          </button>
          <h2>{`${category.subscriptionCount} others are interested`}</h2>
        </div>
      );
    }
  }

  render() {
    const category = this.props.category;
    if (category === undefined) {
      return (
        <div>loading...</div>
      );
    }
    // console.log('CategoryShow.render : this.props.category=', category);
    // console.log(category.id);
    // console.log(this.props.category, "render of categoryShow");


    return (
      <div className='category-header'>
        <div className='category-header-text'>
          <h1>{category.name}</h1>
          {this.renderButtons(category)}
        </div>

      </div>
    );
  }
}

export default CategoryShow;
