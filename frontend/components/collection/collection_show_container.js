import { connect } from 'react-redux';
import { fetchAllCollections } from '../../actions/collection_actions';
import { fetchArticlesByCollection } from '../../actions/article_actions';
import { selectCollection } from '../../reducers/selectors';
import CollectionShow from './collection_show';

const mapStateToProps = (state, { match }) => {
  const collectionTitle = match.params.title;
  return({
    collection: selectCollection(state, collectionTitle),
    articles: state.articles,
    latestArticles: state.articles.latest_articles,
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCollections: () => dispatch(fetchAllCollections()),
    fetchArticlesByCollection: feedId => dispatch(fetchArticlesByCollection(feedId)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(CollectionShow);
