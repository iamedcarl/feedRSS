import React from 'react';
import LoadingIcon from '../loading/loading_icon';
import ArticleIndexItem from './article_index_item';

class ArticleIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllArticles();
  }

  render() {
    if (this.props.loading) {
      return <div><LoadingIcon /></div>;
    }
    
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
      <div className='article-stream'>
        {articles}
      </div>
    );
  }
}

export default ArticleIndex;
