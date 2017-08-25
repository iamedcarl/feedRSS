import { connect } from 'react-redux';
import { fetchAllArticles } from '../../actions/article_actions';
import { selectAllArticles } from '../../reducers/selectors';
import ArticleIndex from './article_index';

const maptStateToProps = state => {
  return {
    articles: state.articles,
    latestArticles: state.articles.latest_articles,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllArticles: () => dispatch(fetchAllArticles()),
  };
};


export default connect(maptStateToProps, mapDispatchToProps)(ArticleIndex);
