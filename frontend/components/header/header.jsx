import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickLogout = this.handleClickLogout.bind(this);
  }

  handleClickLogout(e) {
    this.props.logout();
    this.props.history.push(`/`);
  }

  renderLoggedIn() {
    return(
      <div className='header-logged-in container'>
        <h1><Link to="/">feedRSS</Link></h1>
        <button onClick={this.handleClickLogout}>Logout</button>
      </div>
    );
  }

  renderLoggedOut() {
    return(
      <div className='header-logged-out container'>
        <Link to="/">
          <img src={window.headerIcon} width="24px" height="24px" />
        </Link>
        <div className='header-login-link'>
          <Link to="/login">Login</Link>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.loggedIn) {
      return this.renderLoggedIn();
    } else {
      return this.renderLoggedOut();
    }
  }

} // end of Header

export default withRouter(Header);
