import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import ArticleIndexContainer from '../article/article_index_container';
import HeaderContainer from '../header/header_container';
import SideBar from '../sidebar/sidebar';

class LatestPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(e) {
    this.props.fetchAllArticles();
  }

  render() {
    return(
      <div>
        <header className='header-bar nav-open'>
          <HeaderContainer />
        </header>

        <div className='sidebar'>
          <SideBar />
        </div>

        <div className='today-page'>
          <div className='centered container'>
            <div className='today-header'>
              <div>
                <h1>Latest</h1>
                <div className='today-sub'>
                  The most recent articles in your FeedRSS
                </div>
              </div>
              <button
                className='refresh-button today-refresh-button'
                onClick={this.handleRefresh}
              >
                <i className="fa fa-refresh" aria-hidden="true"></i>
              </button>
            </div>
            <ArticleIndexContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default LatestPage;
