import { connect } from 'react-redux';
import { login, signup } from '../../actions/session_actions';
import AuthForm from './auth_form';

const mapStateToProps = (state, ownProps) => {
  const loggedIn = Boolean(state.session.username);
  const formType = ownProps.location.pathname.slice(1);

  return({
    loggedIn: loggedIn,
    errors: state.ui.errors,
    formType: formType,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const path = ownProps.location.pathname.slice(1);
  const processForm = path === 'login' ? login : signup;

  return({
    processForm: user => dispatch(processForm(user)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
