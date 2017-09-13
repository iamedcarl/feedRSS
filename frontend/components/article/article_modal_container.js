import { connect } from 'react-redux';
import { fetchArticle } from '../../actions/article_actions';
import ArticleModal from './article_modal';

const maptStateToProps = (state, ownProps) => {
  return {
    article: state.articles[ownProps.match.params.id],
    userId: state.session.id,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticle: articleId => dispatch(fetchArticle(articleId)),
  };
};

export default connect(maptStateToProps, mapDispatchToProps)(ArticleModal);
