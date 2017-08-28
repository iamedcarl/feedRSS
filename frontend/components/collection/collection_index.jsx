import React from 'react';
import CollectionIndexItem from './collection_index_item';

class CollectionIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllCollections();
  }

  render() {
    if(this.props.collections === undefined) { return null; }

    const collections = this.props.collections.map(collection => {
      return(
        <CollectionIndexItem
          key={collection.id}
          collection={collection}
        />
      );
    });

    return(
      <div className='collection-index'>
        {collections}
      </div>
    );
  }
}

export default CollectionIndex;
