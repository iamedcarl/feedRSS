import React from 'react';
import FeedIndexContainer from '../feed/feed_index_container';
import HeaderContainer from '../header/header_container';
import SideBar from '../sidebar/sidebar';

class DiscoverPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return(
      <div>
        <header className='header-bar nav-open'>
          <HeaderContainer />
        </header>

        <div className='sidebar'>
          <SideBar />
        </div>

        <div className='discover-page main nav-open'>
          <div className='container centered'>
            <div className='discover-header'>
              <div className='discover-header-title'>
                <i className="fa fa-rss" aria-hidden="true"></i>
                <h1>Discover</h1>
              </div>
              <div className='discover-sub'>
                What source do you want to follow?
              </div>
            </div>
            <div className='discover-feed-box'>
              <FeedIndexContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
} // end of DiscoverPage

export default DiscoverPage;
