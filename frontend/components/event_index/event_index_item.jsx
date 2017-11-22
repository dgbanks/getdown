import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const EventIndexItem = ({event, itemSize}) => {
  if (itemSize === "small") {
    return (
      <div className='small-event-item'>
        <Link
          to={`/events/${event.id}`}
          style={{textDecoration: 'none'}}
          >

          <div className='event-item'>
            <h2 style={{color: 'gray'}}>
              {`${event.date}, ${event.time}`}
            </h2>

            <h1 style={{
              color:'black',
              fontSize: '15px',
              fontWeight: 'bold'
            }}>
              {event.name}
            </h1>

            <h2 style={{color: 'gray'}}>
              Hosted by {" "}
              <h3 style={{display: 'inline', color: 'black'}}>
                {event.host.name}
              </h3>
            </h2>

            <h2 style={{color: 'gray'}}>
              {event.attendance} are down
            </h2>

            <button>I'm Down!</button>

          </div>

        </Link>
      </div>
    );
  } else {

  }
  return (
    <div className='event-index-item'>


      <div className='event-index-item-details'>


        <Link to={`/groups/${event.group.id}/events/${event.id}`} style={{color: 'black', textDecoration: 'none'}}>
          {event.name}
        </Link>

        <h1>{event.location}</h1>

        <h2>{event.description}</h2>

        <h3>Hosted by: {event.host.name}</h3>

      </div>


      <div className='event-index-item-rsvp'>

        <h1>{event.date}</h1>

        <h2>{event.time}</h2>

        <Link
          to={`/groups/${event.group.id}/events/${event.id}`}
          style={{
            color: 'black',
            textDecoration: 'none'
          }}>
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
