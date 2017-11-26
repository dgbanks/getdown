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
  //
  // componentWillMount() {
  //   if (this.props.match.params.categoryId) {
  //     // console.log('fetching category inside discover componentDidMount');
  //     this.props.fetchCategory(this.props.match.params.categoryId);
  //   }
  //
  //   console.log('DISCOVER componentWillMount this.props.match.params.categoryId=', this.props.match.params.categoryId);
  //   console.log('DISCOVER componentWillMount this.props.category=', this.props.category);
  // }


  // componentDidMount() {
  //   // console.log('discover component did mount!!');
  //   // console.log('HERE', this.props.fetchCategory());
  //   if (this.props.match.params.categoryId) {
  //     // console.log('fetching category inside discover componentDidMount');
  //     // this.props.fetchCategory(this.props.match.params.categoryId);
  //   }
  //
  //   console.log('DISCOVER componentDidMount this.props.match.params.categoryId=', this.props.match.params.categoryId);
  //   console.log('DISCOVER componentDidMount this.props.category=', this.props.category);
  // }
  //

  // componentWillReceiveProps(newProps) {
  //   console.log('DISCOVER componentWillReceiveProps: NOW newProps=', newProps);
  //   this.props.fetchCategory(newProps.match.params.categoryId);
  // }



  //   // console.log('componentDidMount', this.props.match.params.categoryId);
  //   // this.props.fetchCategories();
  //   // this.categoryId = this.getCategoryId();
  //   // console.log(this.categoryId, 'SET CATEGORY ID');
  //   // fetchCategory(this.props.match.params.categoryId);
  // } APPARENTLY WE DON'T NEED TO RUN ANY METHOD HERE--- BUT STILL WHY WAS THERE AN ERROR "THIS.PROPS.FETCHCATEGORY IS NOT A FUNCTION"????

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

        <GroupSearchContainer />

        {this.renderIndex(categoryId)}

      </div>
    );
  }
}

export default Discover;
