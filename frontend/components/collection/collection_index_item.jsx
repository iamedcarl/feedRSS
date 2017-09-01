import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class CollectionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(e) {
    this.props.delete(this.props.collection.id)
      .then(data => {
        this.props.history.push("/my");
      });
  }

  render() {
    const {collection, feeds} = this.props;
    const collectedFeeds = collection.feed_ids.map(feedId => {
      let currentFeed = feeds[feedId];
      if(currentFeed === undefined){ return null; }
      return(
        <div key={feedId} className='collected-feed-list nav-highlight'>
          <Link className='navbar-link' to={`/feeds/${currentFeed.id}`}>
            <div className='navbar-feed label'>
              <img id='navbar-feed-icon' src={currentFeed.icon_url} />
              <div className='title'>{currentFeed.title}</div>
            </div>
          </Link>
        </div>
      );
    });

    return(
      <div className='collection-index-item'>
        <div className='collection-line nav-highlight'>
          <Link className='navbar-link' to={`/collections/${collection.title}`}>
            <div className='navbar-item label'>
              <i className="fa fa-angle-down" aria-hidden="true"></i>
              <div className='title'>{collection.title}</div>
            </div>
          </Link>
          <div className='delete-collection'>
            <button onClick={this.handleOnClick}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        {collectedFeeds}
      </div>
    );
  }
}

export default withRouter(CollectionIndexItem);
