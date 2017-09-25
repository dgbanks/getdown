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
      <div className='group-index-container'>
        <div className='group-index'>
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
      </div>
    );
  }

}

export default GroupIndex;
