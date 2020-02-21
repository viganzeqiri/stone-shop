import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { updateCollections } from "../../redux/shop/shop.actions";

import {
	firestore,
	convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";

class Shop extends React.Component {
	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const collectionRef = firestore.collection("collections");
		const { updateCollections } = this.props;

		this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
			async snapshot => {
				const collectionMap = convertCollectionSnapshotToMap(snapshot);
				updateCollections(collectionMap);
			}
		);
	}

	render() {
		const { match } = this.props;
		return (
			<div>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionOverview}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPage}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collection => dispatch(updateCollections(collection))
});

export default connect(null, mapDispatchToProps)(Shop);
