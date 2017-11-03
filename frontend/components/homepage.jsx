import React from 'react';
import GroupSearchContainer from './group_search/group_search_container';
import EventIndexContainer from './event_index/event_index_container';

class Homepage extends React.Component {
  render() {
    return (
      <div className='homepage'>
        
        <div className='image-container'>
          <img
            src='https://images.unsplash.com/reserve/brBe5pGVSwGi0dC3192U_Sunset%20in%20Dunhuang.jpg?dpr=1&auto=compress,format&fit=crop&w=1508&h=&q=80&cs=tinysrgb&crop='
            className='image' />
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
