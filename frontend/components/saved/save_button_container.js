import { connect } from 'react-redux';
import { saveArticle, unsaveArticle } from '../../actions/article_actions';
import SaveButton from './save_button';

const mapStateToProps = state => {
  return({
    user: state.session,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    saveArticle: article => dispatch(saveArticle(article)),
    unsaveArticle: article => dispatch(unsaveArticle(article)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);
