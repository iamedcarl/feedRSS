import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

import ArticleIndexContainer from '../article/article_index_container';

const TodayPage = () => {
  return(
    <div className='today-page'>
      <div className='centered container'>
        <div className='today-header'>
          <div>
            <h1>Today</h1>
            <div className='today-sub'>
              The most popular articles in your FeedRSS
            </div>
          </div>
          <button className='refresh-button today-refresh-button'>
            <i className="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
        <ArticleIndexContainer />
      </div>
    </div>
  );
};

export default TodayPage;
