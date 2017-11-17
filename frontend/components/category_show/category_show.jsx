import React from 'react';
import { Link } from 'react-router-dom';
import GroupIndexContainer from '../';

class CategoryShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  this.props.fetchCategory(this.props.category.id);
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
          <h1>{category.name}</h1>
        </div>

        <GroupIndexContainer />

      </div>
    );
  }
}
