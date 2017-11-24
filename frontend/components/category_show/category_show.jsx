import React from 'react';
import { Link } from 'react-router-dom';
import GroupIndexContainer from '../group_index/group_index_container';
import GroupSearchContainer from '../group_search/group_search_container';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  this.props.fetchCategory(this.props.match.params.categoryId);
  }

  render() {
    console.log(this.props.match.params.categoryId);
    const category = this.props.category;
    if (category === undefined) {
      return (
        <div>loading...</div>
      );
    }
    console.log(category.id);
    // return (
    //   <div className='category-page'>
    //
    //     <div className='category-header'>
    //       <div className='category-header-text'><h1>{category.name}</h1></div>
    //     </div>
    //
    //     <GroupSearchContainer />
    //
    //     <GroupIndexContainer categoryId={category.id}/>
    //
    //   </div>
    // );

    return (
      <div className='category-header'>
        <div className='category-header-text'><h1>{category.name}</h1></div>
      </div>
    );
  }
}

export default CategoryShow;
