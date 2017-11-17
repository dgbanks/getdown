import React from 'react';
import CategoryIndexItem from './category_index_item';

class CategoryIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCategories();
    console.log('CATEGORY INDEX');
    // console.log(this.props.fetchCategories());
    // if (this.props.match.params.categoryId) {
    //   this.props.fetchCategory(this.props.match.params.categoryId);
    // } else {
    //   this.props.fetchCategories();
    // }
  }

  render() {
    return (
      <div className='category-index'>
        <ul>
          {
            this.props.categories.map(category => (
              <CategoryIndexItem
                key={category.id}
                category={category} />
            ))
          }
        </ul>
      </div>
    );
  }

}

export default CategoryIndex;
