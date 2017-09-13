import { connect } from 'react-redux';
import { fetchAllArticles, fetchArticle } from '../../actions/article_actions';
import ReadLaterPage from './read_later_page';

const mapStateToProps = state => {
  return({
    articles: state.articles,
    savedArticles: state.session.article_ids,
    userId: state.session.id,
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllArticles: ()  => dispatch(fetchAllArticles()),
    fetchArticle: articleId => dispatch(fetchArticle(articleId)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ReadLaterPage);
