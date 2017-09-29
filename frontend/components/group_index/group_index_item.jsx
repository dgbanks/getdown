import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const GroupIndexItem = ({group}) => {
  return (
    <div>

      <Link to={`/groups/${group.id}`} style={{color: 'black', textDecoration: 'none'}}>
        <li className='group-item'>
          <div className='item-content'>
            <h1>{group.name}</h1>
            <p> in {group.address}</p>
          </div>
          <p>{group.description}</p>
        </li>
      </Link> <br/>

    </div>
  );
};

export default GroupIndexItem;
