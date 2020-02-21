import React from "react";

import {
	GroupContainer,
	FormInputContainer,
	FormInputLabel
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
	return (
		<GroupContainer>
			<FormInputContainer onChange={handleChange} {...otherProps} />
			{label ? (
				<FormInputLabel shrink={otherProps.value.length ? true : false}>
					{label}
				</FormInputLabel>
			) : null}
		</GroupContainer>
	);
};

export default FormInput;
