import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const GroupIndexItem = ({group}) => {
  return (
    <div className='group-item'>

      <Link
        to={`/groups/${group.id}`}
        style={{
          textDecoration: 'none'}}
        >
        <div
          className='inner-div-wrapper group-item'
          style={{ backgroundImage: `url(${group.img_url})` }}>
          <h2>{group.name}</h2>
        </div>

      </Link>
    </div>
  );
};

export default GroupIndexItem;
