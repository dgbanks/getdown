import React from 'react';
import GroupIndexContainer from './group_index_container';
import { Link } from 'react-router-dom';

class GroupSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { query: ""};
    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getPlaceholder = this.getPlaceholder.bind(this);
    // this.currentCategory = this.props.currentCategory;
    // console.log(this.props.location, 'PROPS');
  }

  componentDidMount() {
    // this.props.fetchGroups();
    this.props.clearGroupSearch();
    this.props.fetchCategories();
    // console.log(this.props.categories, 'group search componentDidMount');
  }

  getPlaceholder() {
    let placeholder = 'Search for groups by name, description, or location';
    if (this.props.placeholder) {
      placeholder = this.props.placeholder;
    }
    return placeholder;
  }

  renderButtonSelected(type) {
    if (this.props.pathname.split('/').includes(type)) {
      return (
        'gray'
      );
    }
    return 'black';
  }

  update(e) {
    this.setState({ query: e.currentTarget.value });
    clearTimeout(this.idleTimeout);
    this.idleTimeout = setTimeout(this.handleSearch, 500);
  }

  handleSearch(e) {
    if (this.state.query === "") {
      this.props.clearGroupSearch();
    } else {
      this.props.searchGroups({group: {query: this.state.query}});
    }
  }

  render() {
    return (
      <div className='search'>

        <div className='search-bar'>
          <input
            className='search-bar'
            type='search'
            placeholder={this.getPlaceholder()}
            onChange={this.update}
          />
          <div className='categories-menu'>

            {
              this.props.categories.map(category => (
                <Link
                  key={category.id}
                  to={`/discover/categories/${category.id}/groups`}
                  style={{color: 'black', textDecoration: 'none'}}>
                    {category.name}
                </Link>
              ))
            }
          </div>
        </div>

        <h1> within X miles of San Francisco </h1>

        <div className='search-options'>
          <div
            className='search-button'
            style={{backgroundColor: `${this.renderButtonSelected('groups')}`}}>
            <Link
              to={`/discover/categories/${this.props.categoryId}/groups`}
              style={{color: 'white', textDecoration: 'none'}}>
              Groups
            </Link>
          </div>

          <div
            className='search-button'
            style={{backgroundColor: `${this.renderButtonSelected('events')}`}}>
            <Link
              to={`/discover/categories/${this.props.categoryId}/events`}
              style={{color: 'white', textDecoration: 'none'}}>
              Events
            </Link>
          </div>

        </div>


      </div>
    );
  }
}

export default GroupSearch;
