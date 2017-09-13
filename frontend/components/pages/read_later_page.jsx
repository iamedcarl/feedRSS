import React from 'react';
import { Link } from 'react-router-dom';
import HeaderContainer from '../header/header_container';
import SideBar from '../sidebar/sidebar';
import ArticleIndexItem from '../article/article_index_item';

class ReadLaterPage extends React.Component {
  componentDidMount() {
    this.props.fetchAllArticles();
  }

  render() {
    if(Object.keys(this.props.articles).length === 0) { return null; }
    const { articles } = this.props;

    const savedArticles = this.props.savedArticles.map(articleId => {
      return(
        <ArticleIndexItem
          key={articleId}
          article={articles[articleId]}
          userId={this.props.userId}
        />
      );
    });

    return(
      <div>
        <header className='header-bar nav-open'>
          <HeaderContainer />
        </header>

        <div className='sidebar'>
          <SideBar />
        </div>

        <div className='main nav-open'>
          <div className='container centered'>
            <div className='today-header'>
              <div>
                <h1>Read Later</h1>
                <div className='today-sub'>
                  Articles you saved
                </div>
              </div>
            </div>
            <div className='collection-show-stream'>
              <ul>
                {savedArticles}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadLaterPage;
