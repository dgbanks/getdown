import React from 'react';
import Modal from 'react-modal';

class GroupForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      location: "",
      category_id: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.createGroup(this.state);
  }

  update(field) {
    return e => {
      e.preventDefault();
      console.log(typeof(e.target.value));
      if (field === 'category_id') {
        this.setState({[field]: parseInt(e.target.value)});
      } else {
        this.setState({[field]: e.target.value});
      }
    };
  }

  render() {
    return (
      <form className="group-form" onSubmit={this.handleSubmit}>

        <h2 className='modal-type'>start a new group</h2>

        <label className='session-label'> Group Name
          <input
            className='session-input'
            type='text'
            value={this.state.name}
            onChange={this.update('name')}/>
        </label>


        <label className='session-label'> Description
            <div className='text-field'>
            <textarea
              className='session-input'
              type='text'
              value={this.state.description}
              onChange={this.update('description')}/>
            </div>
        </label>

        <label className='session-label'> Zip Code
            <input
              className='session-input'
              type='text'
              value={this.state.location}
              onChange={this.update('location')}/>
        </label>

        <label className='session-label'> Category <br/>
          <select
            className= 'session-input'
            value={this.state.category}
            onChange={this.update('category_id')}>
            <option disabled selected>Select category</option>
              {
                this.props.categories.map(category => (
                  <option
                    key={category.id}
                    value={category.id}>
                    {category.name}
                  </option>
                ))
              }
          </select>
        </label>

        <input
          className='session-button'
          type='submit'
          value="Create Group">
        </input>

      </form>
    );
  }

}

export default GroupForm;
