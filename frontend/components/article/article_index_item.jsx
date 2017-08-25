import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

const ArticleIndexItem = ({article}) => {
  const {id, title, date, image_url, content, viewed, url} = article;
  const hidden = image_url === null ? "hidden" : "";

  let checkContent = content;
  if (/<[a-z][\s\S]*>/i.test(content)) {
    checkContent = ReactHtmlParser(content);
  }

  return(
    <li key={id}>
      <div>
        {title}
      </div>
      <div>
        {date}
      </div>
      <div className={hidden}>
        <img src={image_url} height="200px" width="200px"/>
      </div>
      <div className='article-list-content'>
        { ReactHtmlParser(content) }
      </div>
      <div>
        <a href={url}>Vist Website</a>
      </div>
    </li>
  );
};

export default ArticleIndexItem;
