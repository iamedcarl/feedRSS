import React from 'react';
import ArticleIndexItem from './article_index_item';

class ArticleShow extends React.Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
  }

  render() {

    return(
      <div className='article-show'>
        <h1>HELLO!</h1>
      </div>
    );
  }
}

export default ArticleShow;
