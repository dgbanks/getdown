import React from 'react';

class UserForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      zip_code: "",
      interests: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }



  handleSubmit(e) {
    e.preventDefault();
    this.props.signup(this.state);
  }

  update(field) {
    return e => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  handleCheckbox(event) {
    event.preventDefault();
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((err, idx) => (
          <li key={idx}>{err}</li>
        ))}
      </ul>
    );
  }

  render() {
    console.log(this.props.categories);
    return (
      <form className="session-form" onSubmit={this.handleSubmit}>

        <h2 className='modal-type'>sign up</h2>

        <div className='user-inputs'>

              <div className='text-inputs'>

                <label className='session-label'>
                  <p>Name</p>
                  <input
                    className='session-input'
                    type='text'
                    value={this.state.name}
                    onChange={this.update('name')}/>
                </label>

                <label className='session-label'>
                    <p>Email</p>
                    <input className='session-input'
                      type='text'
                      value={this.state.email}
                      onChange={this.update('email')}/>
                  </label>

                <label className='session-label'>
                    <p>Password</p>
                    <input className='session-input'
                      type='password'
                      value={this.state.password}
                      onChange={this.update('password')}/>
                  </label>

                <label className='session-label'>
                    <p>Zip Code</p>
                    <input className='session-input'
                      type='text'
                      value={this.state.zip_code}
                      onChange={this.update('zip_code')}/>
                  </label>

              </div>

              <div className='interests-container'>
                <p>Interests</p>
                <div className='interests'>
                  {
                    this.props.categories.map(category => (
                      <label className='session-checkbox' key={category.id}>
                        <input
                          className='session-input'
                          type="checkbox"
                          value={category.name}
                          onChange={() => this.handleCheckbox()}/>
                          {category.name}
                      </label>
                    ))
                  }
                </div>
              </div>
        </div>

        <input className= 'session-button' type='submit' value="SIGN UP"/>

      </form>
    );
  }

}

export default UserForm;
