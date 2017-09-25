import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const GroupIndexItem = ({group}) => {
  return (
    <li>
      <Link to={`/groups/${group.id}`}>
        {group.name} <br/>
      </Link>
      {group.location} <br/>
    </li>
  );
};

export default GroupIndexItem;
