import React from 'react';
import { Link } from 'react-router-dom';

class FeedIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {

  }

  render() {
    const {title, description, icon_url, rss_url} = this.props.feed;
    return(
      <div className='feed-index-item'>
        <div className='simple-container'>
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
          <button
            id='follow-button'
            onClick={this.handleOnClick}
          >
            Follow
          </button>
      </div>
    );
  }
}

export default FeedIndexItem;
