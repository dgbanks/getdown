import React from 'react';
import GroupIndexContainer from './group_index_container';
import Link from 'react-router-dom';

class GroupSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { query: ""};
    this.update = this.update.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    // this.props.fetchGroups();
    this.props.clearGroupSearch();
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
            placeholder='Search for groups by name, description, or location'
            onChange={this.update}
          />
          <div className='categories-menu'>

          </div>
        </div>

        <h1> within X miles of San Francisco </h1>

        <div>
          <button className='search-options'>Groups</button>
          <button className='search-options'>Events</button>

        </div>


      </div>
    );
  }
}
// <GroupIndexContainer />
// <div className='results'>
// </div>

export default GroupSearch;
