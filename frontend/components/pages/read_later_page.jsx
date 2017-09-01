import React from 'react';
import HeaderContainer from '../header/header_container';
import SideBar from '../sidebar/sidebar';

class ReadLater extends React.Component {
  render() {
    return(
      <div>
        <header className='header-bar nav-open'>
          <HeaderContainer />
        </header>

        <div className='sidebar'>
          <SideBar />
        </div>

        <div className='collection-show main nav-open'>
          <div className='container centered'>
            <div className='collection-show-header'>
              <div className='collection-show-header-title'>
                <h1>Read Later</h1>
              </div>
            </div>
            <div className='read-later-stream'>
              <iframe src="https://giphy.com/embed/3o6ZsX2OZJ8G3Tec6Y" width="480" height="361" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
              <h1>WORK IN PROGRESS</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadLater;
