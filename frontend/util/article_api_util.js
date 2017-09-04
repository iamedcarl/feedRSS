export const fetchAllArticles = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/articles',
  });
};

export const fetchArticle = (articleId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/articles/${articleId}`,
  });
};

export const createArticle = (article) => {
  return $.ajax({
    method: 'POST',
    url: '/api/articles',
    data: { article }
  });
};

export const fetchArticlesByFeed = (feedId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/feeds/${feedId}/articles`,
  });
};

export const fetchArticlesByCollection = (collectionId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/collections/${collectionId}/articles`,
  });
};

export const updateArticle = article => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/articles/${article.id}`,
    data: { article }
  });
};
