import React from 'react';
import GroupSearchContainer from './group_search/group_search_container';
import EventIndexContainer from './event_index/event_index_container';

const randomColor = () => {
  return ['red', 'blue', 'green', 'yellow', 'purple', 'orange'][Math.floor(Math.random() * 4)];
};

const randomOpacity = () => {
  return ['.3', '.4', '.5', '.6', '.7'][Math.floor(Math.random() * 5)];
};

const randomWidth = () => {
  return ['500', '750', '1000', '1250', '1500'][Math.floor(Math.random() * 5)];
};

const randomTime = () => {
  return ['5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'][Math.floor(Math.random() * 11)];
};

const pxOrPercent = () => {
  const array = [['-', 'px'], ['', '%']];
  const result = [];
  let num = Math.floor(Math.random() * 2);
  result.push(array[num]);
  result.push(array[num - 1]);
  return result;
};

const insertKeyframes = (width) => {
  const syms = pxOrPercent();
  const styleSheet = document.styleSheets[0];
  const keyframes = `@keyframes moveStripe {
    from
    { margin-left: ${syms[0][0]}${width}${syms[0][1]}; }
    to
    { margin-left: ${syms[1][0]}${width}${syms[1][1]}; }
    }`;

  styleSheet.insertRule(keyframes);
};

class Homepage extends React.Component {
  constructor() {
    super();
    this.color = randomColor();
    this.margin = 0;
  }

  getRandomStyles() {
    insertKeyframes();
    return (
      {
        position: 'absolute',
        height: '50px',
        zIndex: '-1',
        backgroundColor: this.color,
        opacity: randomOpacity(),
        width: randomWidth(),
        marginTop: `${this.margin}px`,
        animationDuration: `${randomTime()}s`,
        animationName: 'moveStripe',
        animationIterationCount: 'infinite',
        animationDirection: 'alternate',
        // animation: `${randomTime()}s linear 0s infinite { from { margin-left: -20%; } to { margin-left: 100%; }  }`
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
    let array = this.tenStripes();
    return (
      <div className='homepage'>

        <div className='splash-container'>

          {array}

          <div className='splash-text'>
            <h1>Looking for something to do?</h1>
            <h1>find a group you can <h2>getdown</h2> with</h1>
          </div>


        </div>

        <div>
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
