import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const EventIndexItem = ({event}) => {
  return (
    <div>
      <br/>
      <li className='event-item'>
        {event.name} <br/>
        {event.description} <br/>
        {event.location} <br/>
      <Link to={`/groups/${event.group.id}`}>
        {event.group.name}
      </Link>
      </li> <br/>
    </div>
  );
};

export default EventIndexItem;
