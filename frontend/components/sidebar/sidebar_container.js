import { connect } from 'react-redux';
import SideBar from './sidebar';

const mapStateToProps = state => {
  return({
    feeds: state.feeds,
    collections: state.collections,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
