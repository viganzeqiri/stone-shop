import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CollectionPreview from "../preview-collection/collection-preview.component";

import { selectCollectionForPreview } from "../../redux/shop/shop.selectors";

import { CollectionsOverviewContainer } from "./collections-overview.styles";

const CollectionsOverview = ({ collections }) => (
	<CollectionsOverviewContainer>
		{collections.map(({ id, ...restProps }) => (
			<CollectionPreview key={id} {...restProps} />
		))}
	</CollectionsOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
	collections: selectCollectionForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
