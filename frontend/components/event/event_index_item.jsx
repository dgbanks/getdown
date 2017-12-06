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
    return (
      <div>
        <Link
          className='large-event-item'
          to={`/events/${event.id}`}
          style={{textDecoration: 'none'}}>

            <div className='event-item-time'>
              <h3>{event.time}</h3>
            </div>

            <div className='event-item-info'>
              <h2>{event.group.name}</h2>
              <h1>{event.name}</h1>
              <h3>{event.attendance} people attending</h3>
            </div>

        </Link>
      </div>
    );
  }
};

export default EventIndexItem;
