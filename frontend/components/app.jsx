import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LandingPage from './pages/landing_page';
import AuthModal from './auth/auth_modal';
import MainPageContainer from './pages/main_page_container';
import FeedShowContainer from './feed/feed_show_container';
import ArticleShowContainer from './article/article_show_container';
import CollectionShowContainer from './collection/collection_show_container';
import DiscoverPage from './pages/discover_page';
import ReadLaterContainer from './pages/read_later_container';

const App = () => {
  return(
    <div className='app'>
      <Switch>
        <ProtectedRoute path="/articles/:id" component={ArticleShowContainer} />
        <ProtectedRoute path="/feeds/:id" component={FeedShowContainer} />
        <ProtectedRoute path="/collections/:title" component={CollectionShowContainer} />
        <ProtectedRoute path="/discover" component={DiscoverPage} />
        <ProtectedRoute path="/readlater" component={ReadLaterContainer} />
        <ProtectedRoute path="/my" component={MainPageContainer} />
        <AuthRoute path="/login" component={AuthModal} />
        <AuthRoute path="/signup" component={AuthModal} />
        <AuthRoute path="/" component={LandingPage} />
      </Switch>
    </div>
  );
};

export default App;
