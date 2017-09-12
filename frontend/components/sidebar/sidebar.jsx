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
          <Link className='navbar-link' to='/my'>
            <div className='label nav-highlight'>
              <i className="fa fa-calendar-o" aria-hidden="true"></i>
              Today
            </div>
          </Link>
          <Link className='navbar-link' to='/readlater'>
            <div className='label nav-highlight'>
              <i className="fa fa-bookmark-o" aria-hidden="true"></i>
              Read Later
            </div>
          </Link>
          <Link className='navbar-link' to='/discover'>
            <div className='label nav-highlight'>
              <i className="fa fa-search" aria-hidden="true"></i>
              Discover
            </div>
          </Link>
        </div>

        <div className='navbar-separator'>
          Feeds
        </div>
        <CollectionIndexContainer />
      </div>
      <div className='navbar-footer'>
        <Link to="/feeds">
          <i className="fa fa-plus-square-o" aria-hidden="true"></i>
            Add Feed
        </Link>
      </div>
    </div>
  );
};

export default NavBar;


// <a href='https://github.com/iamedcarl/feedRSS' target='_blank'>
//   <i className="fa fa-github" aria-hidden="true"></i>
// </a>
