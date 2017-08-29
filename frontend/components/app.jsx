import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from './pages/landing_page';
import AuthModal from './auth/auth_modal';
import MainPageContainer from './pages/main_page_container';
import DiscoverPage from './pages/discover_page';

const App = () => {
  return(
    <div className='app'>
      <AuthRoute path="/login" component={AuthModal} />
      <AuthRoute path="/signup" component={AuthModal} />
      <AuthRoute path="/" component={LandingPage} />
      <ProtectedRoute path="/my" component={MainPageContainer} />
      <ProtectedRoute path="/discover" component={DiscoverPage} />
    </div>
  );
};

export default App;
