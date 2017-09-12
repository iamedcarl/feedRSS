import { connect } from 'react-redux';
import { updateArticle } from '../../actions/article_actions';
import SaveButton from './save_button';

const mapStateToProps = state => {
  return({
    user: state.session,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    updateArticle: article => dispatch(updateArticle(article)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveButton);
