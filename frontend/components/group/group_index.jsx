import React from 'react';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log('componentDidMount');
    // console.log('GroupIndex.componentDidMount WEOUTHERE');
    this.props.fetchCategoryGroups(this.props.categoryId);
  }

  componentWillReceiveProps(newProps) {
    // console.log('componentWillReceiveProps: newProps=', newProps);
    // console.log('GroupIndex.componentWillReceiveProps: newProps=', newProps);
    // console.log('GroupIndex.componentWillReceiveProps: this.props.categoryId=', this.props.categoryId);
    if (newProps.categoryId !== this.props.categoryId) {
      this.props.fetchCategoryGroups(newProps.categoryId);
      // console.log('FIRE fetchCategoryGroups');
    }
  }

  render() {
    // console.log('GroupIndex.render: this.props.categoryId=', this.props.categoryId);
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
