import { values } from 'lodash';

export const selectAllArticles = ({articles}) => {
  return values(articles);
};

export const selectAllCollections = ({collections}) => {
  return values(collections);
};

export const selectAllFeeds = ({feeds}) => {
  return values(feeds);
};

export const selectFeed = ({ feeds }, id) => {
  const feed = feeds[id] || {};
  return feed;
};
