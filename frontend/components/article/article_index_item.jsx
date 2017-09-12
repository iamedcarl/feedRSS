import React from 'react';
import { Link } from 'react-router-dom';
import SaveButtonContainer from '../saved/save_button_container';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';

const ArticleIndexItem = ({article}) => {
  const {id, title, date, image_url, content, viewed, url} = article;
  const hidden = image_url === null ? "article-img hidden" : "article-img";

  const checkContent = (checkedContent) => {
    const re = /(<img.*?>|<img.*?>.+<\/img>)/g;
    const result = re.exec(checkedContent);
    if (result === null) {
      return(
        <div className='article-summary'>
          { ReactHtmlParser(checkedContent) }
        </div>
      );
    } else {
      return(
        <div className='article-summary'>
          { ReactHtmlParser(checkedContent) }
        </div>
      );
    }
  };

  return(
    <div className='article-index-item'>
      <Link to={`/articles/${id}`}>
        <div className={hidden}>
          <img src={image_url} />
        </div>
        <div className='article-content'>
          <h1>{title}</h1>
          <div className='article-date'>
            <Moment fromNow>{date}</Moment>
          </div>
          <div className='article-summary'>
            { ReactHtmlParser(content) }
          </div>
        </div>
      </Link>
      <div className='article-bookmark'>
        <SaveButtonContainer articleId={id} />
      </div>
    </div>
  );
};

export default ArticleIndexItem;
