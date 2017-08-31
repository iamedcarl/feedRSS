import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/article_actions';
import ArticleShow from './article_show';

const mapStateToProps = (state, { match }) => {
  const articleId = parseInt(match.params.id);
  return {
    article: state.articles[articleId],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticle: articleId => dispatch(fetchArticle(articleId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticleShow);
