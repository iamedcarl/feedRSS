import { connect } from 'react-redux';
import { fetchCollection } from '../../actions/collection_actions';
import { fetchArticlesByFeed } from '../../actions/article_actions';
import { selectFeedsInCollection } from '../../reducers/selectors';
import CollectionShow from './collection_show';

const mapStateToProps = (state, { match }) => {
  const feedId = parseInt(match.params.id);
  return({
    feed: state.feeds[feedId],
    articles: state.articles,
    latestArticles: state.articles.latest_articles,
    collection: state.collection,
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCollection: () => dispatch(fetchCollection()),
    fetchArticlesByFeed: feedId => dispatch(fetchArticlesByFeed(feedId)),
  };
};


export default connect(maptStateToProps, mapDispatchToProps)(CollectionShow);
