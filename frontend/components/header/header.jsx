import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  renderLoggedIn() {
    return(
      <div className='header-logged-in container'>
        <h1><Link to="/">feedRSS</Link></h1>
        <button onClick={this.props.logout}>Logout</button>
      </div>
    );
  }

  renderLoggedOut() {
    return(
      <div className='header-logged-out container'>
        <h1><Link to="/">Welcome to feedRSS</Link></h1>
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

export default Header;
