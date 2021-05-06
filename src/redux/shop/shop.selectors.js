import { createSelector } from 'reselect'; // Used before normalization // Used before normalization

/*const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
}; */

const selectShop = (state) => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) => Object.keys(collections).map((key) => collections[key]) // Turning object into an array
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam] // After data normalization - changing shop collection data into an object with urls param is the key
    /*collections.find(
      (collection) => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )*/ // Before normalization
  );
 