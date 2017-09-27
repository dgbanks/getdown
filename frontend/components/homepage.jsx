import React from 'react';
import GroupSearchContainer from './group_search/group_search_container';
import EventIndexContainer from './event_index/event_index_container';

class Homepage extends React.Component {
  render() {
    return (
      <div className='homepage'>

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
