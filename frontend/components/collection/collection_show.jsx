import React from 'react';
import HeaderContainer from '../header/header_container';
import SideBar from '../sidebar/sidebar';
import ArticleIndexItem from '../article/article_index_item';
import LoadingIcon from '../loading/loading_icon';

class CollectionShow extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchCollection(this.props.match.params.title);
    this.props.fetchArticlesByCollection(this.props.match.params.title);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.title !== nextProps.match.params.title) {
      this.props.fetchArticlesByCollection(nextProps.collection.title);
    }
  }

  renderLoading() {
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
            <LoadingIcon />
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.loading) {
      return this.renderLoading();
    }

    if(this.props.collection === undefined) { return null; }
    const { collection } = this.props;

    if(this.props.latestArticles === undefined) { return null; }
    const articles = this.props.latestArticles.map(articleId => {
      return(
        <ArticleIndexItem
          key={articleId}
          article={this.props.articles[articleId]}
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

        <div className='collection-show main nav-open'>
          <div className='container centered'>
            <div className='collection-show-header'>
              <div className='collection-show-header-title'>
                <h1>{collection.title}</h1>
              </div>
            </div>
            <div className='collection-show-stream'>
              {articles}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CollectionShow;
