import { connect } from 'react-redux';
import { createCollection } from '../../actions/collection_actions';
import { fetchUser } from '../../actions/session_actions';
import MainPage from './main_page';

const maptStateToProps = state => {
  return {
    user: state.session,
    collections: state.session.collection_ids,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUser()),
    createCollection: collection => dispatch(createCollection(collection)),
  };
};


export default connect(maptStateToProps, mapDispatchToProps)(MainPage);
