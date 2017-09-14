import { connect } from 'react-redux';
import { fetchAllArticles } from '../../actions/article_actions';
import ArticleIndex from './article_index';

const maptStateToProps = state => {
  return {
    articles: state.articles,
    latestArticles: state.articles.latest_articles,
    userId: state.session.id,
    loading: state.ui.loading.pageLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllArticles: () => dispatch(fetchAllArticles()),
  };
};

export default connect(maptStateToProps, mapDispatchToProps)(ArticleIndex);
