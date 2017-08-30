import React from 'react';
import { Link } from 'react-router-dom';

const CollectionIndexItem = ({collection}) => {
  const { title, feed_ids } = collection;

  return(
    <div className='collection-index-item'>
        <Link className='navbar-link' to={`/collections/${title}`}>
          <div className='label nav-highlight'>
            {title}
          </div>
        </Link>
    </div>
  );
};

export default CollectionIndexItem;
