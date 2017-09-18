import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import { clearErrors } from '../../actions/error_actions';
import LandingPage from './landing_page';

const mapDispatchToProps = dispatch => {
  return({
    login: user => dispatch(login(user)),
  });
};

export default connect(null, mapDispatchToProps)(LandingPage);
