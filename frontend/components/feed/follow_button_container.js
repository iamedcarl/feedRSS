import { connect } from 'react-redux';
import { updateFeed, fetchFeed } from '../../actions/feed_actions';
import FollowButton from './follow_button';

const mapDispatchToProps = dispatch => {
  return({
    updateFeed: feed => dispatch(updateFeed(feed)),
    fetchFeed: feedId => dispatch(fetchFeed(feedId)),
  });
};

export default connect(null, mapDispatchToProps)(FollowButton);
