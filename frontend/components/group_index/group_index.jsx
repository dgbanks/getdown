import React from 'react';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchGroups();
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.props.groups.map(group => (
              <GroupIndexItem
                key={group.id}
                group={group} />
            ))
          }
        </ul>
      </div>
    );
  }

}

export default GroupIndex;
