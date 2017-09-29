import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const EventIndexItem = ({event}) => {
  return (
    <div>
      <br/>
      <Link to={`/events/${event.id}`} style={{color: 'black', textDecoration: 'none'}}>
        <div className='event-date'>{event.date}</div>
        <li className='event-item'>
          <div className='item-content'>
            <h2>{event.name}</h2>
            <p> at {event.location}</p>
          </div>
          <p>{event.description}</p>
          <h2>{event.group.name}</h2>
        </li>
      </Link>
    </div>
  );
};

export default EventIndexItem;
