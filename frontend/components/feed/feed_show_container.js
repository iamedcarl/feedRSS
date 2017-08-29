import { connect } from 'react-redux';
import { fetchFeed } from '../../actions/feed_actions';
import { fetchArticlesByFeed } from '../../actions/article_actions';
import FeedShow from './feed_show';

const mapStateToProps = (state, { match }) => {
  const feedId = parseInt(match.params.id);
  return({
    feed: state.feeds[feedId],
    articles: state.articles,
    latestArticles: state.articles.latest_articles,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchArticlesByFeed: feedId => dispatch(fetchArticlesByFeed(feedId)),
    fetchFeed: feedId => dispatch(fetchFeed(feedId)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedShow);
