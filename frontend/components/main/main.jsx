import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import ArticleIndexContainer from '../article/article_index_container';


const Main = () => {
  return(
    <div className='main-page'>
      <ArticleIndexContainer />
    </div>
  );
};

export default Main;
