import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import MenuItem from "../menu-item/menu-item.component";

import { DirectoryContainer } from "./directory.styles";
const Directory = ({ sections }) => (
	<DirectoryContainer>
		{sections.map(({ id, ...restProps }) => (
			<MenuItem key={id} {...restProps} />
		))}
	</DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
