export const fetchAllFeeds = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/feeds',
  });
};

export const fetchFeed = (feedId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/feeds/${feedId}`,
  });
};

export const createFeed = (feed) => {
  return $.ajax({
    method: 'POST',
    url: '/api/feeds',
    data: { feed }
  });
};

export const deleteFeed = (feedId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/feeds/${feedId}`,
  });
};
