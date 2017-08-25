import React from 'react';

const ArticleIndexItem = ({article}) => {
  const {id, title, date, image_url, content, viewed} = article;
  return(
    <div>
      {title}
    </div>
  );
};

export default ArticleIndexItem;
