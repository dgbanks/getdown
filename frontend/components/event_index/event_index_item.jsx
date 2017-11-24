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
};


export default EventIndexItem;
