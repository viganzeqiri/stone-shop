import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import { updateCollections } from "../../redux/shop/shop.actions";

import {
	firestore,
	convertCollectionSnapshotToMap
} from "../../firebase/firebase.utils";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class Shop extends React.Component {
	state = {
		loading: true
	};

	unsubscribeFromSnapshot = null;

	componentDidMount() {
		const collectionRef = firestore.collection("collections");
		const { updateCollections } = this.props;

		collectionRef.get().then(snapshot => {
			const collectionMap = convertCollectionSnapshotToMap(snapshot);
			updateCollections(collectionMap);
			this.setState({ loading: false });
		});
	}

	render() {
		const { loading } = this.state;
		const { match } = this.props;
		return (
			<div>
				<Route
					exact
					path={`${match.path}`}
					render={props => (
						<CollectionOverviewWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					render={props => (
						<CollectionPageWithSpinner
							isLoading={loading}
							{...props}
						/>
					)}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	updateCollections: collection => dispatch(updateCollections(collection))
});

export default connect(null, mapDispatchToProps)(Shop);
