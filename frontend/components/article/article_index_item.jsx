import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';

const ArticleIndexItem = ({article}) => {
  const {id, title, date, image_url, content, viewed, url} = article;
  const hidden = image_url === null ? "article-img hidden" : "article-img";

  let checkContent = content;
  if (/<[a-z][\s\S]*>/i.test(content)) {
    checkContent = ReactHtmlParser(content);
  }

  return(
    <div className='article-index-item'>

      <div className={hidden}>
        <img src={image_url} height="200px" width="200px"/>
      </div>
      <div className='article-content'>
        <a href={url}>{title}</a>
        <div className='article-date'>
          <Moment fromNow>{date}</Moment>
        </div>
        <div className='article-summary'>
          { content }
        </div>
      </div>
    </div>
  );
};

export default ArticleIndexItem;
