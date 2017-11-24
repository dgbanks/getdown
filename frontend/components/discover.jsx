import React from 'react';
import CategoryShowContainer from './category_show/category_show_container';
import GroupSearchContainer from './group_search/group_search_container';
import GroupIndexContainer from './group_index/group_index_container';
import * as SplashUtil from '../util/splash_util';
import { fetchCategory } from '../actions/category_actions';

class Discover extends React.Component {
  constructor() {
    super();
    // this.categoryId = 38;
  }

  componentDidMount() {
    if (this.props.match.params.categoryId) {
      fetchCategory(this.props.match.params.categoryId);
    }
    console.log('componentDidMount', this.props.match.params.categoryId);
    // this.categoryId = this.getCategoryId();
    // console.log(this.categoryId, 'SET CATEGORY ID');
    // fetchCategory(this.props.match.params.categoryId);
  }

  getIndex(categoryId) {
    if (this.props.location.pathname.includes('events/')) {
      return (
        "event index"
        // <EventIndexContainer
      );
    } else {
      return (
        <GroupIndexContainer categoryId={categoryId}/>
      );
    }
  }

  render() {
    // console.log(this.props.match.params.categoryId);
    console.log('render', this.categoryId);
    const categoryId = this.props.match.params.categoryId;
    if (categoryId === undefined) {
      return (
        <div>loading...</div>
      );
    }

    return (
      <div className='category-page'>
        <CategoryShowContainer categoryId={categoryId}/>

        <GroupSearchContainer />

        {this.getIndex(categoryId)}
      </div>
    );
  }
}
// <GroupIndexContainer categoryId={categoryId}/>

export default Discover;
