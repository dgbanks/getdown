import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const GroupEventIndexItem = ({event}) => {
  return (
    <div>
      <br/>
      <li className='event-item'>
        {event.name} <br/>
        {event.description} <br/>
        {event.location} <br/>
      </li>
    </div>
  );
};

export default GroupEventIndexItem;
