import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
import LandingPage from './landing/landing';
import AuthModal from './auth/auth_modal';

const App = () => {
  return(
    <div className='app'>
      <header className='header-bar'>
        <HeaderContainer />
      </header>
      <Route path="/" component={LandingPage} />
      <AuthRoute path="/login" component={AuthModal} />
      <AuthRoute path="/signup" component={AuthModal} />
    </div>
  );
};

export default App;
