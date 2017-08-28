import React from 'react';
import { Link } from 'react-router-dom';

const CollectionIndexItem = ({collection}) => {
  const {title} = collection;

  return(
    <div className='collection-index-item'>
      <Link to={`/collections/${title}`}>{title}</Link>
    </div>
  );
};

export default CollectionIndexItem;
