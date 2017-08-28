import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import TodayPage from './today_page';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

  }

  renderWelcome() {
    return(
      <div className='fresh-start main'>
        <div className='centered container'>
          <h1>Welcome, {this.props.user.fname} {this.props.user.lname}</h1>

          <form onSubmit={this.handleSubmit}>

          </form>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    if (this.props.user === undefined) { return null; }
    if (this.props.collections.length === 0) {
      return(
        <div>
          {this.renderWelcome()}
        </div>
      );
    } else {
      return(
        <div className='main-page main'>
          <TodayPage />
        </div>
      );
    }
  }

} // end of MainPage

export default MainPage;
