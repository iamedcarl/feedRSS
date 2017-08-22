import React from 'react';
import { Route } from 'react-router-dom';

import HeaderContainer from './header/header_container';
import AuthFormContainer from './auth/auth_form_container';

const App = () => {
  return(
    <div className='app'>
      <header>
        <HeaderContainer />
      </header>
      <Route path="/login" component={AuthFormContainer} />
      <Route path="/signup" component={AuthFormContainer} />
    </div>
  );
};

export default App;
