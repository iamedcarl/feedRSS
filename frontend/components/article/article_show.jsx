import React from 'react';
import HeaderContainer from '../header/header_container';
import SideBar from '../sidebar/sidebar';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';

class ArticleShow extends React.Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
  }

  render() {
    if(this.props.article === undefined) { return null; }
    const { article } = this.props;

    return(
      <div className='article-show'>
        <div className='article-show-header-title'>
          <a href={article.url} target='_blank'><h1>{article.title}</h1></a>
        </div>
        <div className='article-show-date'>
          <Moment fromNow>{article.date}</Moment>
        </div>
        <div className='article-show-content'>
          { ReactHtmlParser(article.content) }
        </div>
        <div className='article-show-url'>
          <a href={article.url} target='_blank'> Visit Website</a>
        </div>
      </div>
    );
  }
}

export default ArticleShow;
