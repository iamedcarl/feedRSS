import { connect } from 'react-redux';
import { fetchAllFeeds } from '../../actions/feed_actions';
import { fetchAllCollections } from '../../actions/collection_actions';
import { selectAllFeeds, allCollectionFeedIds } from '../../reducers/selectors';
import FeedIndex from './feed_index';

const maptStateToProps = state => {
  return {
    feeds: selectAllFeeds(state),
    feedIds: allCollectionFeedIds(state),
    collectionIds: state.session.collection_ids,
    collections: state.collections,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllFeeds: () => dispatch(fetchAllFeeds()),
    fetchAllCollections: () => dispatch(fetchAllCollections()),
  };
};


export default connect(maptStateToProps, mapDispatchToProps)(FeedIndex);
