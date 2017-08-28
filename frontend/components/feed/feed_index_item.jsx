import React from 'react';
import { Link } from 'react-router-dom';

const FeedIndexItem = ({feed}) => {
  const {title, description, icon_url, rss_url} = feed;
  return(
    <div className='feed-index-item'>
      <div className='feed-index-item-icon'>
        <img src={icon_url} />
      </div>
      <Link to={`/feeds/${title}`}>{title}</Link>
      <div className='feed-index-item-description'>
        {description}
      </div>
    </div>
  );
};

export default FeedIndexItem;
