import React from 'react';
import GroupIndexContainer from '../group_index/group_index_container';

class GroupSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = { query: ""};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchGroups();
  }




  update(e) {
    this.setState({ query: e.currentTarget.value });
    clearTimeout(this.idleTimeout);
    this.idleTimeout = setTimeout(this.handleSubmit, 500);
  }

    // return e => {
    //   e.preventDefault();
    //   this.setState({ query: e.target.value });
    // };

  handleSubmit(e) {
    // e.preventDefault();
    this.props.searchGroups({group: {query: this.state.query}});
  }

  render() {
    return (
      <div className='search'>

        <input
          className='search-bar'
          type='search'
          placeholder='Search for groups by name or description'
          onChange={this.update}
        />

        <div className='results'>
          <GroupIndexContainer />
        </div>

      </div>
    );
  }
}

export default GroupSearch;
