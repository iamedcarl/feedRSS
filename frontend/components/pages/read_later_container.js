import { connect } from 'react-redux';
import { fetchSavedArticles } from '../../actions/session_actions';
import ReadLaterPage from './read_later_page';

const mapStateToProps = state => {
  return({
    articles: state.articles,
    latestArticles: state.articles.latest_articles,
    savedArticles: state.session.article_ids,
    userId: state.session.id,
  });
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSavedArticles: ()  => dispatch(fetchSavedArticles()),
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(ReadLaterPage);
