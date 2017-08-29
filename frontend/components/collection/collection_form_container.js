import { connect } from 'react-redux';

import {
  fetchAllCollections,
  createCollection
} from '../../actions/collection_actions';

import CollectionForm from './collection_form';

const mapStateToProps = state => {
  return({
    collections: state.collections,
    errors: state.errors,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    fetchAllCollections: () => dispatch(fetchAllCollections()),
    createCollection: collection => dispatch(createCollection(collection)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionForm);
