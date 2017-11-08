import React from 'react';
import GroupSearchContainer from './group_search/group_search_container';
import EventIndexContainer from './event_index/event_index_container';
import * as SplashUtil from '../util/splash_util';


class Homepage extends React.Component {
  constructor() {
    super();
    this.color = SplashUtil.randomColor();
    this.width = SplashUtil.randomWidth();
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
        opacity: SplashUtil.randomOpacity(),
        width: `${this.width}px`,
        marginTop: `${this.margin}px`,
        animationName: 'moveStripe',
        animationDuration: `${SplashUtil.randomTime()}s`,
        animationIterationCount: 'infinite',
        animationDirection: 'alternate-reverse',
        animationTimingFunction: 'linear'
      }
    );
  }

  makeStripe() {
    return (
      <div className='single-stripe' style={this.getRandomStyles()}>
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
            <h1>find a group you can
              <h2 style={{color: this.color, fontWeight: 'bold', margin: '0px 15px'}}>
                getdown</h2>with
            </h1>
          </div>


        </div>

        <GroupSearchContainer />

        <div>
          <EventIndexContainer />
        </div>

      </div>
    );
  }
}

export default Homepage;
