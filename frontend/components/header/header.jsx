import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    if (this.props.session) {
      return(
        <div className='header-logged-in'>
          <h1><Link to="/">feedRSS</Link></h1>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    } else {
      return(
        <div className='header-logged-out'>
          <h1><Link to="/">feedRSS</Link></h1>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </div>
      );
    }
  }

} // end of Header

export default Header;
