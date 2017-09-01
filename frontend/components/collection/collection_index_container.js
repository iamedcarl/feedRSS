import { connect } from 'react-redux';
import { fetchAllCollections, deleteCollection } from '../../actions/collection_actions';
import { fetchAllFeeds } from '../../actions/feed_actions';
import { selectAllCollections } from '../../reducers/selectors';
import CollectionIndex from './collection_index';

const maptStateToProps = state => {
  return {
    feeds: state.feeds,
    collections: selectAllCollections(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllFeeds: () => dispatch(fetchAllFeeds()),
    fetchAllCollections: () => dispatch(fetchAllCollections()),
    deleteCollection: collection => dispatch(deleteCollection(collection)),
  };
};


export default connect(maptStateToProps, mapDispatchToProps)(CollectionIndex);
