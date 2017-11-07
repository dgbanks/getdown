import React from 'react';
import GroupSearchContainer from './group_search/group_search_container';
import EventIndexContainer from './event_index/event_index_container';

const stripeStyles = {
  color: 'red',
  height: '50px',
  width: '50px',
  // animation: '10s linear 0s infinite from { margin-left: -20%; } to { margin-left: 100%; }'
};


class Homepage extends React.Component {

  makeStripe() {
    return (
      <div className='single-stripe' style={stripeStyles}>
      </div>
    );
  }

  tenStripes() {
    let count = 0;
    const array = [];
    while (count < 10) {
      this.makeStripe();
      count ++;
    }
  }

  render() {
    return (
      <div className='homepage'>

        <div className='splash-container'>

          <div className='stripes'>{this.tenStripes()}</div>

          <div className='splash-text'>
            <h1>Looking for something to do?</h1>
            <h1>find a group you can <h2>getdown</h2> with</h1>
          </div>

          <div>
            <GroupSearchContainer />
          </div>

        </div>


        <div>
          <EventIndexContainer />
        </div>

      </div>
    );
  }
}

export default Homepage;
