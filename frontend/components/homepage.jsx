import React from 'react';
import GroupSearchContainer from './group_search/group_search_container';
import EventIndexContainer from './event_index/event_index_container';
import * as SplashUtil from '../util/splash_util';


class Homepage extends React.Component {
  constructor() {
    super();
    this.color = SplashUtil.randomColor();
    this.width = '1000';
    this.margin = 0;
  }

  getRandomStyles() {
    // let width = randomWidth();
    SplashUtil.insertKeyframes(this.width);

    return (
      {
        position: 'absolute',
        height: '50px',
        zIndex: '-1',
        backgroundColor: SplashUtil.randomColor(),
        mixBlendMode: 'multiply',
        opacity: '1',
        width: `${this.width}px`,
        marginTop: `${this.margin}px`,
        marginLeft: `-${this.width}px`,
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
      <div className='single-stripe other-class' style={this.getRandomStyles()}>
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
    return array;
  }

  render() {
    return (
      <div className='homepage'>

        <div className='splash-container'>

          {this.tenStripes()}

          <div className='splash-text'>
            <h1>Looking for something to do?</h1>
            <h1>find a group you can<h2 style={{
              display: 'inline',
              color: this.color,
              fontFamily: 'cursive',
              fontWeight: 'bold',
              margin: '0px 15px'}}>getdown</h2>with</h1>
          </div>

        </div>

        <GroupSearchContainer />


      </div>
    );
  }
}

// <div>
//   <EventIndexContainer />
// </div>

export default Homepage;
