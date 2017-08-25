import React from 'react';
import ArticleIndexItem from './article_index_item';

class ArticleIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllArticles();
  }

  render() {
    const articles = this.props.articles.map(article => {
      return(
        <li key={article.id}>
        <ArticleIndexItem  article={article} />
        </li>
      );
    });

    return(
      <div className='article-index main'>
        <ul>
          {articles}
        </ul>
      </div>
    );
  }
}

export default ArticleIndex;
