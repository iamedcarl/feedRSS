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

export const selectCollection = (state, title) => {
  let selectedCollection;
  let collections = values(state.collections);
  collections.forEach(collection => {
    if(collection.title === title) {
      selectedCollection = collection;
    }
  });
  return selectedCollection;
};
