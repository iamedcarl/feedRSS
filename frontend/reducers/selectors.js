import { values } from 'lodash';

export const selectAllArticles = ({articles}) => {
  return values(articles);
};
