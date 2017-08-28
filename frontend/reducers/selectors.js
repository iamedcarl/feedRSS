import { values } from 'lodash';

export const selectAllArticles = ({articles}) => {
  return values(articles);
};

export const selectAllCollections = ({collections}) => {
  return values(collections);
};
