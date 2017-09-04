import React from 'react';
import HeaderContainer from '../header/header_container';
import SideBar from '../sidebar/sidebar';
import ArticleIndexItem from '../article/article_index_item';

class ReadLaterPage extends React.Component {
  componentDidMount() {
    this.props.fetchAllArticles();
  }

  render() {
    if(this.props.savedArticles === undefined) { return null; }
    const savedArticles = this.props.savedArticles.map(articleId => {
      return(
        <ArticleIndexItem
          key={articleId}
          article={this.props.articles[articleId]}
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

        <div className='collection-show main nav-open'>
          <div className='container centered'>
            <div className='collection-show-header'>
              <div className='collection-show-header-title'>
                <h1>Read Later</h1>
              </div>
            </div>
            <div className='collection-show-stream'>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ReadLaterPage;
