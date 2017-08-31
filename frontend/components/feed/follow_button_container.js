import { connect } from 'react-redux';
import { updateFeed } from '../../actions/feed_actions';
import { fetchCollection } from '../../actions/collection_actions';
import FollowButton from './follow_button';

const mapDispatchToProps = dispatch => {
  return({
    updateFeed: feed => dispatch(updateFeed(feed)),
    fetchCollection: collectionTitle => dispatch(fetchCollection(collectionTitle)),
  });
};

export default connect(null, mapDispatchToProps)(FollowButton);
