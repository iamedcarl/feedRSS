import React from 'react';
import { Link } from 'react-router-dom';
import SaveButtonContainer from '../saved/save_button_container';
import ReactHtmlParser from 'react-html-parser';
import Moment from 'react-moment';

const ArticleIndexItem = (props) => {
  const {
    id,
    title,
    date,
    image_url,
    content,
    viewed,
    url,
    user_ids
  } = props.article;

  const hidden = image_url === null ? "article-img hidden" : "article-img";

  let saveStatus = "";
  if (user_ids.includes(props.userId)) {
    saveStatus = "bookmark-saved";
  } else {
    saveStatus = "bookmark-unsaved";
  }

  const checkContent = (checkedContent) => {
    const re = /<p>.+?<\/p>/g;
    const parsedContent = checkedContent.match(re);
    if (parsedContent === null) {
      return(
        <div className='article-summary'>
          { ReactHtmlParser(checkedContent) }
        </div>
      );
    } else {
      return(
        <div className='article-summary'>
          { ReactHtmlParser(parsedContent[0]) }
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
          { checkContent(content) }
        </div>
      </Link>
      <div className={saveStatus}>
        <SaveButtonContainer
          article={props.article}
          userId={props.userId}
        />
      </div>
    </div>
  );
};

export default ArticleIndexItem;
