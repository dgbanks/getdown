import React from 'react';
import CategoryIndexItem from './category_index_item';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    console.log(this.props.categories);
    return (
      <div className='category-index'>

        <h1> Explore </h1>

        <div className='index-grid'>

          {
            this.props.categories.map(category => (
              <CategoryIndexItem
                key={category.id}
                category={category} />
              ))
            }

        </div>
      </div>
    );
  }

}

export default CategoryIndex;
