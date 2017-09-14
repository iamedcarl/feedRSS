import { connect } from 'react-redux';
import { fetchFeed } from '../../actions/feed_actions';
import { fetchArticlesByFeed } from '../../actions/article_actions';
import { allCollectionFeedIds } from '../../reducers/selectors';
import FeedShow from './feed_show';

const mapStateToProps = (state, { match }) => {
  const feedId = parseInt(match.params.id);
  return({
    feed: state.feeds[feedId],
    articles: state.articles,
    latestArticles: state.articles.latest_articles,
    feedIds: allCollectionFeedIds(state),
    collectionIds: state.session.collection_ids,
    collections: state.collections,
    userId: state.session.id,
    loading: state.ui.loading.pageLoading,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchArticlesByFeed: feedId => dispatch(fetchArticlesByFeed(feedId)),
    fetchFeed: feedId => dispatch(fetchFeed(feedId)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedShow);
