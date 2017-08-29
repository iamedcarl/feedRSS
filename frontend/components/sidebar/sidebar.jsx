import React from 'react';
import { Route, Link } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import CollectionIndexContainer from '../collection/collection_index_container';

const NavBar = () => {
  return(
    <div className='navbar-holder'>
      <div className='navbar'>
        <div className='navbar-top-spacer'></div>
        <div className='navbar-tabs'>
          <div className='navbar-link label'>
            <Link to='/my'>Today</Link>
          </div>
          <div className='navbar-link label'>
            <Link to='/later'>Read Later</Link>
          </div>
          <div className='navbar-link label'>
            <Link to='/discover'>Discover</Link>
          </div>
        </div>

        <div className='navbar-separator'>
          Feeds
        </div>
        <div className='navbar-link label'>
          <CollectionIndexContainer />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
