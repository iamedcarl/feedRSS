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

export const updateFeed = (feed) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/feeds/${feed.id}`,
    data: { feed }
  });
};
