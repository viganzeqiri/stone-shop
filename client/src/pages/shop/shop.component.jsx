import React, { useEffect, lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

import Spinner from "../../components/spinner/spinner.component";

const CollectionOverviewContainer = lazy(() =>
	import(
		"../../components/collections-overview/collection-overview.container"
	)
);
const CollectionPageContainer = lazy(() =>
	import("../collection/collection.container")
);

const Shop = ({ startFetching, match }) => {
	useEffect(() => {
		startFetching();
	}, [startFetching]);

	return (
		<div>
			<Suspense fallback={<Spinner />}>
				<Route
					exact
					path={`${match.path}`}
					component={CollectionOverviewContainer}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</Suspense>
		</div>
	);
};

const mapDispatchToProps = dispatch => ({
	startFetching: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(Shop);
