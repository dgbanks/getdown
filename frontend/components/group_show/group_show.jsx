import React from 'react';
import { Link } from 'react-router-dom';

class GroupShow extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const group = this.props.group;
    return (
      <div>
        <h3>{group.name}</h3>
        <p>{group.description}</p>
      </div>
    );
  }
}

export default GroupShow;
