import React from 'react';
import { Link } from 'react-router-dom';

const FeedIndexItem = ({feed}) => {
  const {title, description, icon_url, rss_url} = feed;
  return(
    <div className='feed-index-item'>
      <div className='feed-index-item-icon'>
        <div className='feed-img'>
          <img src={icon_url} />
        </div>
      </div>
      <div className='feed-content'>
        <Link to={`/feeds/${title}`}>{title}</Link>
        <div className='feed-description'>
          {description}
        </div>
      </div>
    </div>
  );
};

export default FeedIndexItem;
