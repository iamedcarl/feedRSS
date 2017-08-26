import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import LandingPage from './pages/landing_page';
import AuthModal from './auth/auth_modal';
import TodayPage from './pages/today_page';
import SideBar from './collection/sidebar';

const App = () => {
  return(
    <div className='app'>
      <header className='header-bar'>
        <HeaderContainer />
      </header>
      <div className='sidebar'>
        <SideBar />
      </div>
      <AuthRoute path="/login" component={AuthModal} />
      <AuthRoute path="/signup" component={AuthModal} />
      <AuthRoute path="/" component={LandingPage} />
      <ProtectedRoute path="/my" component={TodayPage} />
    </div>
  );
};

export default App;
