import { connect } from 'react-redux';
import { fetchAllFeeds } from '../../actions/feed_actions';
import { selectAllFeeds } from '../../reducers/selectors';
import FeedIndex from './feed_index';

const maptStateToProps = state => {
  return {
    feeds: selectAllFeeds(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllFeeds: () => dispatch(fetchAllFeeds()),
  };
};


export default connect(maptStateToProps, mapDispatchToProps)(FeedIndex);
