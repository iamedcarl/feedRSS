import React from 'react';
import FeedIndexItem from './feed_index_item';

class FeedIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllFeeds();
    this.props.fetchAllCollections();
  }

  userFollowed(feedId) {
    let followed = false;
    this.props.feedIds.forEach(collectionFeedId => {
      if(collectionFeedId === feedId) { followed = true; }
    });
    return followed;
  }

  render() {
    if(this.props.feeds === undefined) { return null; }

    const feeds = this.props.feeds.map(feed => {
      return(
        <FeedIndexItem
          key={feed.id}
          followed={this.userFollowed(feed.id)}
          feed={feed}
          collectionIds={this.props.collectionIds}
          collections={this.props.collections}
        />
      );
    });

    return(
      <div className='feed-index'>
        {feeds}
      </div>
    );
  }
}

export default FeedIndex;
