import { connect } from 'react-redux';
import { fetchAllArticles } from '../../actions/article_actions';
import TodayPage from './today_page';

const mapDispatchToProps = dispatch => {
  return {
    fetchAllArticles: () => dispatch(fetchAllArticles()),
  };
};

export default connect(null, mapDispatchToProps)(TodayPage);
