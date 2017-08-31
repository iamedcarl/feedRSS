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
                <h1>{article.title}</h1>
              </div>
              <div className='article-date'>
                <Moment fromNow>{article.date}</Moment>
              </div>
                <div>
                  { ReactHtmlParser(article.content) }
                </div>
              <a href={article.url} target='_blank'> Visit Website</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ArticleShow;
