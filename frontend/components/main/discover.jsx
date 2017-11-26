import React from 'react';
import CategoryShowContainer from '../category/category_show_container';
import GroupSearchContainer from '../group/group_search_container';
import GroupIndexContainer from '../group/group_index_container';
import * as SplashUtil from '../../util/splash_util';
import { fetchCategory } from '../../actions/category_actions';

class Discover extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.match.params.categoryId) {
      this.props.fetchCategory(this.props.match.params.categoryId)
    }
  }

  renderHeader(categoryId) {
    if (this.props.match.params.categoryId) {
      return (
        <CategoryShowContainer categoryId={categoryId}/>
      );
    } else if (this.props.currentUser) {
      return (
        <div>
          <h1>YOUR NEXT GETDOWN EVENT</h1>
        </div>
      );
    } else {
      if (this.props.location.pathname.includes('groups/')) {
        return (
          <div>
            <h1>SEARCH GROUPS</h1>
          </div>
        );
      } else {
        return (
          <div>
            <h1>SEARCH EVENTS</h1>
          </div>
        );
      }
    }
  }

  renderIndex(categoryId) {
    if (this.props.location.pathname.includes('events/')) {
      return (
        "event index"
        // return <EventIndexContainer categoryId={categoryId} />
      );
    } else {
      console.log('GroupIndexContainer', categoryId);
      return (
        <GroupIndexContainer categoryId={categoryId}/>
      );
    }
  }

  render() {
    // console.log(this.props.match.params.categoryId);
    // console.log('render', this.categoryId);
    const categoryId = this.props.match.params.categoryId;
    if (categoryId === undefined) {
      return (
        <div>loading...</div>
      );
    }
    // console.log(this.props.categories, 'discover');
    return (
      <div className='category-page'>

        {this.renderHeader(categoryId)}

        <GroupSearchContainer placeholder={this.props.category.name}/>

        {this.renderIndex(categoryId)}

      </div>
    );
  }
}

export default Discover;
