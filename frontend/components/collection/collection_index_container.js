import { connect } from 'react-redux';
import { fetchAllCollections } from '../../actions/collection_actions';
import { selectAllCollections } from '../../reducers/selectors';
import CollectionIndex from './collection_index';

const maptStateToProps = state => {
  return {
    collections: selectAllCollections(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCollections: () => dispatch(fetchAllCollections()),
  };
};


export default connect(maptStateToProps, mapDispatchToProps)(CollectionIndex);
