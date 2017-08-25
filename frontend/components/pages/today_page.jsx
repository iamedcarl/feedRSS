import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import ArticleIndexContainer from '../article/article_index_container';

const Main = () => {
  return(
    <div className='centered container'>
      <div className='today-header'>
        <h1>Today</h1>
        <div className='today-sub'>
          The most popular articles in your FeedRSS
        </div>
      </div>
      <ArticleIndexContainer />
    </div>
  );
};

export default Main;
