import React from 'react';
import CategoryShowContainer from '../category/category_show_container';
import GroupSearchContainer from '../group/group_search_container';
import GroupIndexContainer from '../group/group_index_container';
import EventIndexContainer from '../event/event_index_container';
import * as SplashUtil from '../../util/splash_util';

class Discover extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('Discover.componentDidMount: this.props.match.path=', this.props.match.path);
    if (this.props.match.params.categoryId) {
      this.props.fetchCategory(this.props.match.params.categoryId);
    }
  }

  componentWillReceiveProps(newProps) {
    console.log('Discover.componentWillReceiveProps: newProps=', newProps);
    // if (newProps.location.pathname.includes('search')) {
    //
    // }
  }

  alternateHeader(text) {
    return (
      <div className='category-header'>
        <div className='category-header-text'>
          <h1>{text}</h1>
        </div>
      </div>
    );
  }


  renderHeader() {
    if (this.props.category) {
      return (
        <CategoryShowContainer
          categoryId={this.props.category.id}/>
      );
    } else if (this.props.location.pathname.includes('search')) {
      return this.alternateHeader('Search for getdown groups');
    } else {
      if (this.props.match.path.includes('groups')) {
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

  renderIndex() {
    let categoryId = undefined;
    if (this.props.category) {
      categoryId = this.props.category.id;
    }

    if (this.props.location.pathname.includes('events')) {
      // console.log('TIME FOR SOME EVENTINDEXXXXXX');
      return (
        <EventIndexContainer categoryId={categoryId}/>
      );
    } else {
      // console.log(this.props.location.pathname);
      // console.log('GroupIndexContainer', categoryId);
      return (
        <GroupIndexContainer categoryId={categoryId}/>
      );
    }
  }

  getPlaceholder() {
    if (this.props.category) {
      return this.props.category.name;
    } else {
      return undefined;
    }
  }


  render() {
    // console.log(this.props.match.params.categoryId);
    // console.log('render', this.categoryId);

    const categoryId = this.props.match.params.categoryId;
    const category = this.props.category;
    if (this.props.match.params.categoryId && category === undefined) {
      return (
        <div>loading...</div>
      );
    }

    // console.log(this.props.categories, 'discover');
    return (
      <div className='category-page'>

        {this.renderHeader()}

        <GroupSearchContainer
          placeholder={this.getPlaceholder()}
          pathname={this.props.location.pathname}/>

        {this.renderIndex()}

      </div>
    );
  }
}

export default Discover;
