import { connect } from 'react-redux';
import { updateFeed } from '../../actions/feed_actions';
import FollowButton from './follow_button';

const mapDispatchToProps = dispatch => {
  return({
    updateFeed: feed => dispatch(updateFeed(feed)),
  });
};

export default connect(null, mapDispatchToProps)(FollowButton);
