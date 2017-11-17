import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const GroupIndexItem = ({group}) => {
  return (
    <div className='group-item'>

      <Link
        to={`/groups/${group.id}`}
        style={{color: 'black', textDecoration: 'none'}}
        >
        <div className='inner-div-wrapper group-item'>
          <h2>{group.name}</h2>
        </div>

      </Link>
    </div>
  );
};

// <li className='group-item'>
//   <div className='item-content'>
//     <h1>{group.name}</h1>
//       <p> in {group.address}</p>
//       </div>
//       <p>{group.description}</p>
//       </li>
export default GroupIndexItem;
