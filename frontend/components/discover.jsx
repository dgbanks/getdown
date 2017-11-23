import React from 'react';
import CategoryShowContainer from './category_show/category_show_container';
import GroupSearchContainer from './group_search/group_search_container';
import GroupIndexContainer from './group_index/group_index_container';
import * as SplashUtil from '../util/splash_util';
import { fetchCategory } from '../actions/category_actions';

class Discover extends React.Component {
  constructor() {
    super();
    // this.categoryId;
  }

  componentDidMount() {
    this.categoryId = this.getCategoryId();
    console.log(this.categoryId, 'SET CATEGORY ID');
    fetchCategory(this.categoryId);
  }

  getCategoryId() {
    if (this.props.match.params.categoryId) {
      return (
        this.props.match.params.categoryId
      );
    } else {
      console.log('NO CATEGORY ID PASSED IN');
      return (
        <CategoryIndexContainer />
      );
    }
  }

  render() {
    console.log(this.categoryId);
    if (this.categoryId === undefined) {
      return (
        <div>loading...</div>
      );
    }

    return (
      <div className='category-page'>
        <CategoryShowContainer categoryId={this.categoryId}/>

        <GroupSearchContainer />

        <GroupIndexContainer categoryId={this.categoryId}/>
      </div>
    );
  }
}

export default Discover;
