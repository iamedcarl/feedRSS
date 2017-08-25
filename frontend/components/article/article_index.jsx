import React from 'react';
import ArticleIndexItem from './article_index_item';

class ArticleIndex extends React.Component {
  componentDidMount() {
    this.props.fetchAllArticles();
  }

  render() {
    const articles = this.props.articles.map(article => {
      return(<ArticleIndexItem key={article.id} article={article} />);
    });

    return(
      <div className='article-index'>
        <ul>
          {articles}
        </ul>
      </div>
    );
  }
}

export default ArticleIndex;
