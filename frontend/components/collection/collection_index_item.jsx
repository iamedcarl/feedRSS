import React from 'react';
import { Link } from 'react-router-dom';

const CollectionIndexItem = ({collection, feeds}) => {
  const { title, feed_ids } = collection;

  const collectedFeeds = feed_ids.map(feedId => {
    let currentFeed = feeds[feedId];
    return(
      <div className='collected-feed-list nav-highlight'>
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
        <Link className='navbar-link' to={`/collections/${title}`}>
          <div className='navbar-item label nav-highlight'>
            <i className="fa fa-angle-down" aria-hidden="true"></i>
            <div className='title'>{title}</div>
          </div>
        </Link>
        {collectedFeeds}
    </div>
  );
};

export default CollectionIndexItem;
