import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import {
	CollectionPreviewContainer,
	CollectionTitle,
	Preview
} from "./collection-preview.styles";

const CollectionPreview = ({ title, items }) => (
	<CollectionPreviewContainer>
		<CollectionTitle>{title.toUpperCase()}</CollectionTitle>
		<Preview>
			{items
				.filter((_, idx) => idx < 4)
				.map(item => (
					<CollectionItem key={item.id} item={item} />
				))}
		</Preview>
	</CollectionPreviewContainer>
);

export default CollectionPreview;
