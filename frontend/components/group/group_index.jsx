import React from 'react';
import GroupIndexItem from './group_index_item';

class GroupIndex extends React.Component {

  constructor(props) {
    super(props);
  }

  // componentDidUpdate() {
  //   // console.log(this.props.categoryId, 'GROUPINDEX componentDidMount');
  //   console.log('GroupIndex.componentDidUpdate: this.props.categoryId=', this.props.categoryId);
  //   if (this.props.categoryId) {
  //     console.log('are we calling the right function?');
  //     this.props.fetchCategoryGroups(this.props.categoryId);
  //   } else {
  //     this.props.fetchGroups();
  //   }
  //   console.log('GroupIndex.componentDidUpdate: this.props.groups=', this.props.groups);
  // }

  componentDidMount() {
    console.log('GroupIndex.componentDidMount WEOUTHERE');
    this.props.fetchCategoryGroups(this.props.categoryId);
  }

  componentWillReceiveProps(newProps) {
    console.log('GroupIndex.componentWillReceiveProps: newProps=', newProps);
    console.log('GroupIndex.componentWillReceiveProps: this.props.categoryId=', this.props.categoryId);
    if (newProps.categoryId !== this.props.categoryId) {
      this.props.fetchCategoryGroups(newProps.categoryId);
      console.log('FIRE fetchCategoryGroups');
    }
  }



  render() {
    console.log('GroupIndex.render: this.props.categoryId=', this.props.categoryId);
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
