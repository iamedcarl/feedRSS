import React from 'react';
import FeedIndexItem from './feed_index_item';

class FeedIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllFeeds();
  }

  render() {
    if(this.props.feeds === undefined) { return null; }

    const feeds = this.props.feeds.map(feed => {
      return(
        <FeedIndexItem
          key={feed.id}
          feed={feed}
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
