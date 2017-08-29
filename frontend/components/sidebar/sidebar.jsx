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
            <Link to='/laters'>Read Later</Link>
          </div>
        </div>

        <div className='navbar-separator'>
          Feeds
        </div>
      <CollectionIndexContainer />
      </div>
    </div>
  );
};

export default NavBar;
