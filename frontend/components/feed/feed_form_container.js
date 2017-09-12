import { connect } from 'react-redux';
import { createFeed } from '../../actions/feed_actions';
import FeedForm from './feed_form';

const mapStateToProps = state => {
  return({
    errors: state.ui.errors,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    createFeed: feed => dispatch(createFeed(feed)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(FeedForm);
