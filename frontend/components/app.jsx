import React from 'react';
import { Route } from 'react-router-dom';

import Header from './header/header';
import AuthFormContainer from './auth/auth_form_container';

const App = () => {
  return(
    <div className='app'>
      <header>
        <Header />
      </header>
      <Route path='/login' component={AuthFormContainer} />
      <Route path='/signup' component={AuthFormContainer} />
    </div>
  );
};

export default App;
