import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const GroupIndexItem = ({group}) => {
  return (
    <div>
      <br/>
      <li className='group-item'>

        <div className='item-content'>
          <Link to={`/groups/${group.id}`} style={{color: 'black', fontSize: '20px', textWeight: 'bold', textDecoration: 'none'}}>
            {group.name}
          </Link>
          <p> in {group.location}</p>
        </div>
        <p>{group.description}</p>

      </li> <br/>
    </div>
  );
};

export default GroupIndexItem;
