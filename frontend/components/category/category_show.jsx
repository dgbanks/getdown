import React from 'react';
import { Link } from 'react-router-dom';
import * as SplashUtil from '../../util/splash_util';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubscriptionChange = this.handleSubscriptionChange.bind(this);
    this.renderButtons = this.renderButtons.bind(this);

    this.colors = ['rgb(255, 255, 0)', 'rgb(255, 0, 255)', 'rgb(0, 255, 255)'];
    this.color = SplashUtil.randomColor();
  }

  getRandomStyles() {
    let width = 1500;
    SplashUtil.insertKeyframes(width);

    return (
      {
        position: 'absolute',
        zIndex: '1',
        backgroundColor: this.color,
        mixBlendMode: 'multiply',
        opacity: '.2',
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

  makeStripe(num) {
    return (
      <div key={num} style={this.getRandomStyles()}></div>
    );
  }

  threeStripes() {
    let count = 0;
    const array = [];
    while (count < 3) {
      array.push(this.makeStripe(count));
      count ++;
    }
    return array;
  }

  handleSubscriptionChange(magicWord) {
    if (this.props.currentUser) {
      if (magicWord === 'subscribe') {
        this.props.subscribeToCategory(this.props.category.id);
      } else {
        this.props.unsubscribeFromCategory(this.props.category.id);
      }
      window.location.reload();
    } else {
      this.props.toggleSessionModal();
    }
  }


  renderButtons(category) {
    if (this.props.category.isCurrentUserSubscriber) {
      return (
        <div className='category-actions page-actions'>
          <button onClick={() => this.handleSubscriptionChange('unsubscribe')}>
            Not Interested
          </button>
          <h2>You and {`${category.subscriptionCount - 1} others are interested`}</h2>
        </div>
      );
    } else {
      return (
        <div className='category-actions page-actions'>
          <button onClick={() => this.handleSubscriptionChange('subscribe')}>
            I'm Interested
          </button>
          <h2>{`${category.subscriptionCount} people are interested`}</h2>
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

    return (
      <div
        className='category-header'
        style={{
          backgroundImage: `url(${category.img_url})`,
          backgroundSize: '100%'
        }}>
        <div className='category-header-text'>
          <h1>{category.name}</h1>
          {this.renderButtons(category)}
        </div>
      </div>
    );
  }
}

export default CategoryShow;
