import { ShopActionTypes } from "./shop.types";

export const updateCollections = collection => ({
	type: ShopActionTypes.UPDATE_COLLECTIONS,
	payload: collection
});
