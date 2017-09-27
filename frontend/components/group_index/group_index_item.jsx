import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const GroupIndexItem = ({group}) => {
  return (
    <div>
      <br/>
      <li className='group-item'>
        <Link to={`/groups/${group.id}`} style={{color: 'pink', textWeight: 'bold', textDecoration: 'none'}}>
          {group.name} <br/>
        </Link>
        {group.location} <br/>
      </li> <br/>
    </div>
  );
};

export default GroupIndexItem;
