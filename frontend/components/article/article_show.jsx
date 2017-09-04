import React from 'react';
import HeaderContainer from '../header/header_container';
import SideBar from '../sidebar/sidebar';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';

class ArticleShow extends React.Component {
  componentDidMount() {
    this.props.fetchArticle(this.props.match.params.id);
  }

  checkContent(content) {
    const re = /(<img.*?>|<img.*?>.+<\/img>)/g;
    const result = re.exec(content);
    if (result === null) {
      return(
        <div className='article-show-content'>
          <img src={this.props.article.image_url} />
          { ReactHtmlParser(content) }
        </div>
      );
    } else {
      return(
        <div className='article-show-content'>
          { ReactHtmlParser(content) }
        </div>
      );
    }
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
        {this.checkContent(article.content)}
        <a id='article-url' href={article.url} target='_blank'>
          <div className='article-show-url'>
            Visit Website
          </div>
        </a>
      </div>
    );
  }
}

export default ArticleShow;
