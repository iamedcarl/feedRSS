import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import FeedIndexContainer from '../feed/feed_index_container';

class DiscoverPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

  }

  render() {
    return(
      <div className='discover-page main'>
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
            <button
              className='follow-button'
              onclick={this.handleClick}
            >
              Follow
            </button>
          </div>
        </div>
      </div>
    );
  }

} // end of DiscoverPage

export default DiscoverPage;
