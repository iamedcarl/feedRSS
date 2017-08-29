export const fetchAllCollections = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/collections',
  });
};

export const fetchCollection = (collectionId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/collections/${collectionId}`,
  });
};

export const createCollection = (collection) => {
  return $.ajax({
    method: 'POST',
    url: '/api/collections',
    data: { collection }
  });
};

export const updateCollection = (collection) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/collections/${collection.id}`,
    data: { collection }
  });
};

export const deleteCollection = (collectionId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/collections/${collectionId}`,
  });
};
