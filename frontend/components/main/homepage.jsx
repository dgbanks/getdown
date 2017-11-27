import React from 'react';
import CategoryIndexContainer from '../category/category_index_container';

class Homepage extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='homepage'>

        <div className='splash-container'>
          <video
            className='splash-video'
            src="https://secure.meetupstatic.com/s/img/457419671895069178/guest_home/video.mp4"
            autoPlay="autoplay"
            loop="loop">
          </video>

          <div className='splash-text'>
            <h1>Looking for something to do?</h1>
            <h1>find a group you can
              <h2 style={{
                display: 'inline',
                color: '#FF0B55',
                fontFamily: 'cursive',
                fontWeight: 'bold',
                margin: '0px 15px'}}>
                getdown
              </h2>
              with
            </h1>
            <button
              onClick={() => this.openModal('signup')}
              className='splash-button'>
              Sign Up
            </button>

          </div>

        </div>

        <CategoryIndexContainer />


      </div>
    );
  }
}


export default Homepage;
