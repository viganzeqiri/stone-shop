import { ShopActionTypes } from "./shop.types";

import {
	firestore,
	convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";

export const fetchCollectionsStart = () => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collection => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
	payload: collection
});

export const fetchCollectionsFailure = error => ({
	type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
	payload: error
});

export const startFetchingCollectionsAsync = () => {
	return dispatch => {
		const collectionRef = firestore.collection("collections");
		dispatch(fetchCollectionsStart());

		collectionRef
			.get()
			.then(snapshot => {
				const collectionMap = convertCollectionSnapshotToMap(snapshot);
				dispatch(fetchCollectionsSuccess(collectionMap));
			})
			.catch(error => dispatch(fetchCollectionsFailure(error.message)));
	};
};
