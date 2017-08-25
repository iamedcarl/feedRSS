import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HeaderContainer from './header/header_container';
import LandingPage from './landing/landing';
import AuthModal from './auth/auth_modal';
import Main from './main/main';

const App = () => {
  return(
    <div className='app'>
      <header className='header-bar'>
        <HeaderContainer />
      </header>
      <AuthRoute path="/login" component={AuthModal} />
      <AuthRoute path="/signup" component={AuthModal} />
      <AuthRoute path="/" component={LandingPage} />
      <ProtectedRoute path="/my" component={Main} />
    </div>
  );
};

export default App;
