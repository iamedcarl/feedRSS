import React from 'react';
import { Link } from 'react-router-dom';
import FollowButtonContainer from './follow_button_container';

class FeedIndexItem extends React.Component {
  render() {
    const {id, title, description, icon_url, rss_url} = this.props.feed;

    return(
      <div className='feed-index-item'>
        <div className='simple-container'>
          <div className='feed-index-item-icon'>
            <div className='feed-img'>
              <img src={icon_url} />
            </div>
          </div>
          <div className='feed-content'>
            <Link to={`/feeds/${id}`}>{title}</Link>
            <div className='feed-description'>
              {description}
            </div>
          </div>
        </div>

      <FollowButtonContainer
        followed={this.props.followed}
        feedId={id}
        feed={this.props.feed}
        collectionIds={this.props.collectionIds}
      />

      </div>
    );
  }
}

export default FeedIndexItem;
