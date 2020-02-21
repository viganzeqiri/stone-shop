import { createSelector } from "reselect";

const shopSelector = state => state.shop;

export const selectShopCollections = createSelector(
	[shopSelector],
	shop => shop.collections
);

export const selectCollectionForPreview = createSelector(
	[selectShopCollections],
	collections =>
		collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
	createSelector([selectShopCollections], collections =>
		collections ? collections[collectionUrlParam] : null
	);
