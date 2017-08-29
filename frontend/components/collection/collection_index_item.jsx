import React from 'react';
import { Link } from 'react-router-dom';

const CollectionIndexItem = ({collection}) => {
  const { title, feed_ids } = collection;

  return(
    <div className='collection-index-item'>
      <li>
        <Link to={`/collections/${title}`}>{title}</Link>
      </li>
    </div>
  );
};

export default CollectionIndexItem;
