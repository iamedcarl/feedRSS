import { connect } from 'react-redux';

import {
  fetchAllCollections,
  createCollection
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
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionForm);
