import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const GroupIndexItem = ({group}) => {
  return (
    <div>
      <br/>
      <li className='group-item'>
        <Link to={`/groups/${group.id}`}>
          {group.name} <br/>
        </Link>
        {group.location} <br/>
      </li> <br/>
    </div>
  );
};

export default GroupIndexItem;
