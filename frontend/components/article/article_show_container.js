import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/article_actions';
import ArticleShow from './article_show';

const maptStateToProps = state => {
  return {
    articles: state.articles,
    latestArticles: state.articles.latest_articles,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticle: articleId => dispatch(fetchArticle(articleId)),
  };
};

export default connect(maptStateToProps, mapDispatchToProps)(ArticleShow);
