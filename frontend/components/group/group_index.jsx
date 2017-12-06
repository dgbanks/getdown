import React from 'react';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategoryGroups(this.props.categoryId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.categoryId !== this.props.categoryId) {
      this.props.fetchCategoryGroups(newProps.categoryId);
    }
  }

  render() {
    return (
        <div className='group-index'>

          <h1> Sorted By: </h1>

          <div className='index-grid'>
            {
              this.props.groups.map(group => (
                <GroupIndexItem
                  key={group.id}
                  group={group} />
                ))
              }

          </div>
        </div>
    );
  }

}

export default GroupIndex;
