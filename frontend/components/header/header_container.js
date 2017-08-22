import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Header from './header';

const mapStateToProps = state => {
  const loggedIn = Boolean(state.session.username);
  return({
    loggedIn: loggedIn,
    user: state.session,
  });
};

const mapDispatchToProps = dispatch => {
  return({
    logout: () => dispatch(logout()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
