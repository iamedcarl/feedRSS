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
            <div className='collection-show-stream'>
              TBD
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadLater;
