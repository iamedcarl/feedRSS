import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import TodayPage from './today_page';

class MainPage extends React.Component {
  
  render() {
    return(
      <div className='main-page main'>
        <TodayPage />
      </div>
    );
  }
}

export default MainPage;
