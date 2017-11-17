import React from 'react';
import { Link } from 'react-router-dom';
import GroupIndexContainer from '../group_index/group_index_container';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  this.props.fetchCategory(this.props.match.params.categoryId);
  }

  render() {
    const category = this.props.category;
    if (category === undefined) {
      return (
        <div>loading...</div>
      );
    }

    return (
      <div className='category-page'>

        <div className='category-header'>
          <div className='category-header-text'><h1>{category.name}</h1></div>
        </div>

        <GroupIndexContainer />

      </div>
    );
  }
}

export default CategoryShow;
