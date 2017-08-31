import { connect } from 'react-redux';

import {
  fetchAllCollections,
  createCollection,
  updateCollection
} from '../../actions/collection_actions';

import { selectAllCollections } from '../../reducers/selectors';
import CollectionForm from './collection_form';

const mapStateToProps = state => {
  return({
    collections: selectAllCollections(state),
    errors: state.errors,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAllCollections: () => dispatch(fetchAllCollections()),
    createCollection: collection => dispatch(createCollection(collection)),
    updateCollection: collection => dispatch(updateCollection(collection)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionForm);
