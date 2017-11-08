import React from 'react';
import GroupSearchContainer from './group_search/group_search_container';
import EventIndexContainer from './event_index/event_index_container';

const randomColor = () => {
  return ['red', 'blue', 'green', 'yellow', 'purple', 'orange'][Math.floor(Math.random() * 6)];
};

const randomOpacity = () => {
  return ['.2', '.3', '.4', '.5', '.6', '.7', '.8'][Math.floor(Math.random() * 7)];
};

const randomWidth = () => {
  return ['500', '750', '1000', '1250', '1500'][Math.floor(Math.random() * 5)];
};

const randomDelay = () => {
  return ['0', '.1', '.2', '.3',
                '.4', '.5', '.6', '.7',
                '.8', '.9', '1'][Math.floor(Math.random() * 11)];
};

const randomTime = () => {
  return ['5', '5.25', '5.5', '5.75',
          '6', '6.25', '6.5', '6.75',
          '7', '7.25', '7.5', '7.75',
          '8', '8.25', '8.5', '8.75',
          '9', '9.25', '9.5', '9.75',
          '10'][Math.floor(Math.random() * 21)];
};

const insertKeyframes = (width) => {
  let styleSheet = document.styleSheets[0];
  let keyframes = `@keyframes moveStripe {
    from
    { margin-left: -${width}px; }
    to
    { margin-left: 100%; }
    }`;

  styleSheet.insertRule(keyframes);
};

class Homepage extends React.Component {
  constructor() {
    super();
    this.color = randomColor();
    this.width = randomWidth();
    this.margin = 0;
  }

  getRandomStyles() {
    // let width = randomWidth();
    insertKeyframes(this.width);

    return (
      {
        position: 'absolute',
        height: '50px',
        zIndex: '-1',
        backgroundColor: randomColor(),
        opacity: randomOpacity(),
        width: `${this.width}px`,
        marginTop: `${this.margin}px`,
        animationName: 'moveStripe',
        animationDuration: `${randomTime()}s`,
        // animationDelay: `${randomDelay()}s`,
        // animationFillMode: 'none',
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
    // let array = this.tenStripes();
    return (
      <div className='homepage'>

        <div className='splash-container'>

          {this.tenStripes()}

          <div className='splash-text'>
            <h1>Looking for something to do?</h1>
            <h1>find a group you can <h2 style={{color: this.color, fontWeight: 'bold'}}>getdown</h2> with</h1>
          </div>

          <GroupSearchContainer />

        </div>

        <div>
          <EventIndexContainer />
        </div>

      </div>
    );
  }
}

export default Homepage;
