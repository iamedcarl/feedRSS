import React from 'react';
import { Link } from 'react-router-dom';

const CollectionIndexItem = ({collection, feeds}) => {
  const collectedFeeds = collection.feed_ids.map(feedId => {
    let currentFeed = feeds[feedId];
    if(currentFeed === undefined){ return null; }
    return(
      <div key={feedId} className='collected-feed-list nav-highlight'>
        <Link className='navbar-link' to={`/feeds/${currentFeed.id}`}>
          <div className='navbar-feed label'>
              <img id='navbar-feed-icon' src={currentFeed.icon_url} />
              <div className='title'>{currentFeed.title}</div>
          </div>
        </Link>
      </div>
    );
  });

  return(
    <div className='collection-index-item'>
        <Link className='navbar-link' to={`/collections/${collection.title}`}>
          <div className='navbar-item label nav-highlight'>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            <div className='title'>{collection.title}</div>
          </div>
        </Link>
        {collectedFeeds}
    </div>
  );
};

export default CollectionIndexItem;
