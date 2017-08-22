import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
import AuthFormContainer from './auth/auth_form_container';

import AuthModal from './auth/auth_modal';

const App = () => {
  return(
    <div className='app'>
      <header>
        <HeaderContainer />
      </header>
      <AuthRoute path="/login" component={AuthModal} />
      <AuthRoute path="/signup" component={AuthModal} />
    </div>
  );
};

export default App;
