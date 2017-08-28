import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import FeedIndexContainer from '../feed/feed_index_container';

const DiscoverPage = () => {
  return(
    <div className='discover-page main'>
      <div className='container centered'>
        <i className="fa fa-rss" aria-hidden="true"></i>
        <h1>Discover</h1>
        <div className='discover-sub'>
          What source do you want to follow?
        </div>
        <FeedIndexContainer />
      </div>
    </div>
  );
}; // end of DiscoverPage

export default DiscoverPage;
