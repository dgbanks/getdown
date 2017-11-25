import React from 'react';
import GroupSearchContainer from '../group/group_search_container';
import EventIndexContainer from '../event/event_index_container';
import CategoryIndexContainer from '../category/category_index_container';
import * as SplashUtil from '../../util/splash_util';


class Homepage extends React.Component {
  constructor() {
    super();
    this.color = SplashUtil.randomColor();
    this.width = 1000;
    this.margin = 0;
  }

  getRandomStyles() {
    // let width = randomWidth();
    // SplashUtil.insertKeyframes(this.width);

    return (
      {
        position: 'absolute',
        height: '50px',
        zIndex: '-1',
        backgroundColor: SplashUtil.randomColor(),
        mixBlendMode: 'multiply',
        opacity: '.3',
        width: `${this.width}px`,
        marginTop: `${this.margin}px`,
        marginLeft: SplashUtil.randomPosition(this.width),
        // animationName: 'moveLeftStripe',
        // animationDuration: `${SplashUtil.randomTime()}s`,
        // animationDelay: `${SplashUtil.randomDelay()}s`,
        // animationFillMode: 'none',
        // animationIterationCount: 'infinite',
        // animationDirection: 'alternate',
        // animationTimingFunction: 'linear'
      }
    );
  }

  getMoreStyles() {
    // let width = randomWidth();
    // SplashUtil.insertKeyframes(this.width);

    return (
      {
        position: 'absolute',
        height: '50px',
        zIndex: '-1',
        backgroundColor: SplashUtil.randomColor(),
        mixBlendMode: 'multiply',
        opacity: '.3',
        width: `${this.width}px`,
        marginTop: `${this.margin}px`,
        marginLeft: SplashUtil.randomPosition(this.width),
        // animationName: 'moveRightStripe',
        // animationDuration: `${SplashUtil.randomTime()}s`,
        // animationDelay: `${SplashUtil.randomDelay()}s`,
        // animationFillMode: 'none',
        // animationIterationCount: 'infinite',
        // animationDirection: 'alternate',
        // animationTimingFunction: 'linear'
      }
    );
  }

  makeStripe() {
    return (
      <div className='single-stripe other-class' style={this.getRandomStyles()}>
      </div>
    );
  }

  otherStripe() {
    return (
      <div className='single-stripe other-class' style={this.getMoreStyles()}>
      </div>
    );
  }

  tenStripes() {
    let count = 0;
    const array = [];
    while (count < 10) {
      array.push(this.makeStripe());
      count ++;
      this.margin += 50;
    }

    this.margin = 25;

    count = 0;
    while (count < 9) {
      array.push(this.otherStripe());
      count ++;
      this.margin += 50;
    }

    return array;
  }

  render() {
    return (
      <div className='homepage'>

        <div className='splash-container'>
          <video
            className='splash-video'
            src="https://secure.meetupstatic.com/s/img/457419671895069178/guest_home/video.mp4"
            autoPlay="autoplay"
            loop="loop">
          </video>

          <div className='splash-text'>
            <h1>Looking for something to do?</h1>
            <h1>find a group you can
              <h2 style={{
                display: 'inline',
                color: '#FF0B55',
                fontFamily: 'cursive',
                fontWeight: 'bold',
                margin: '0px 15px'}}>
                getdown
              </h2>
              with
            </h1>
            <button
              onClick={() => this.openModal('signup')}
              className='splash-button'>
              Sign Up
            </button>

          </div>

        </div>

        <CategoryIndexContainer />


      </div>
    );
  }
}


export default Homepage;
