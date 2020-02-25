import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/custom-button.component";

import {
	googleSignInStart,
	emailSignInStart
} from "../../redux/user/user.actions";

import {
	SigninContainer,
	SigninTitle,
	ButtonsContainer
} from "./signin.styles";

const Signin = ({ emailSignIn, googleSigIn }) => {
	const [userCredentials, setCredentials] = useState({
		email: "",
		password: ""
	});

	const { email, password } = userCredentials;

	const handleSubmit = async event => {
		event.preventDefault();

		emailSignIn(email, password);
	};

	const handleChange = event => {
		const { value, name } = event.target;

		setCredentials({ ...userCredentials, [name]: value });
	};

	return (
		<SigninContainer>
			<SigninTitle>I already have an account</SigninTitle>
			<span>Sign in with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					label="email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					handleChange={handleChange}
					label="password"
					required
				/>

				<ButtonsContainer>
					<Button type="submit"> SIGN IN</Button>
					<Button type="button" isGoogleSignIn onClick={googleSigIn}>
						{" "}
						Sign in with Google
					</Button>
				</ButtonsContainer>
			</form>
		</SigninContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	googleSigIn: () => dispatch(googleSignInStart()),
	emailSignIn: (email, password) =>
		dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(Signin);
