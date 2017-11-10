import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const EventIndexItem = ({event}) => {
  return (
    <div className='event-index-item'>


      <div className='event-index-item-details'>

        <Link to={`/events/${event.id}`} style={{color: 'black', textDecoration: 'none'}}>
          {event.name}
        </Link>

        <h1>{event.location}</h1>

        <h2>{event.description}</h2>

        <h3>Hosted by: {event.host.name}</h3>

      </div>


      <div className='event-index-item-rsvp'>

        <h1>{event.date}</h1>

        <h2>{event.time}</h2>

        <Link to={`/events/${event.id}`} style={{color: 'black', textDecoration: 'none'}}>
          I'm down!
        </Link>

        <h3>{event.attendance} people are down</h3>

      </div>


    </div>
  );
};

//
// <div className='event-date'>{event.date}</div>
//   <li className='event-item'>
//     <div className='item-content'>
//       <h2>{event.name}</h2>
//         <p> at {event.location}</p>
//         </div>
//         <p>{event.description}</p>
//           <h2>{event.group.name}</h2>
//           </li>
export default EventIndexItem;
