import React from 'react';
import HeaderContainer from '../header/header_container';
import SideBar from '../sidebar/sidebar';
import ArticleIndexItem from '../article/article_index_item';
import FollowButtonContainer from './follow_button_container';

class FeedShow extends React.Component {
  userFollowed(feedId) {
    let followed = false;
    this.props.feedIds.forEach(collectionFeedId => {
      if(collectionFeedId === feedId) { followed = true; }
    });
    return followed;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const feedId = parseInt(this.props.match.params.id);
    this.props.fetchArticlesByFeed(feedId);
    this.props.fetchFeed(feedId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      window.scrollTo(0, 0);
      this.props.fetchArticlesByFeed(nextProps.feed.id);
    }
  }

  render() {
    const { feed } = this.props;
    if (feed === undefined) {return null;}

    if(this.props.latestArticles === undefined) { return null; }
    const articles = this.props.latestArticles.map(articleId => {
      return(
        <ArticleIndexItem
          key={articleId}
          article={this.props.articles[articleId]}
          userId={this.props.userId}
        />
      );
    });

    return(
      <div>
        <header className='header-bar nav-open'>
          <HeaderContainer />
        </header>

        <div className='sidebar'>
          <SideBar />
        </div>

        <div className='feed-show main nav-open'>
          <div className='container centered'>
            <div className='feed-show-header'>
              <div className='feed-show-header-title'>
                <h1><a href={feed.url} target='_blank'>{feed.title}</a></h1>
                <div className='feed-show-desc'>
                  {feed.description}
                </div>
              </div>
              <FollowButtonContainer
                feedId={this.props.feed.id}
                followed={this.userFollowed(feed.id)}
                feed={this.props.feed}
                collectionIds={this.props.collectionIds}
                collections={this.props.collections}
              />
            </div>
            <div className='feed-show-feed-box'>
              {articles}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedShow;
