import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import { SignupContainer, SignupTitle } from "./sign-up.styles";

const SignUp = ({ signUp }) => {
	const [userData, setUserData] = useState({
		displayName: "",
		email: "",
		password: "",
		confrimPassword: ""
	});

	const { displayName, email, password, confrimPassword } = userData;

	const handleSubmit = async event => {
		event.preventDefault();

		if (password !== confrimPassword) {
			alert("Passwords don't match");
			return;
		}
		signUp({ displayName, email, password });
	};

	const handleChange = event => {
		const { name, value } = event.target;

		setUserData({ ...userData, [name]: value });
	};

	return (
		<SignupContainer>
			<SignupTitle>I do not have an account</SignupTitle>
			<span>Sign up with your email and password</span>

			<form onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					onChange={handleChange}
					label="Display Name"
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					onChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					onChange={handleChange}
					label="Password"
					required
				/>
				<FormInput
					type="password"
					name="confrimPassword"
					value={confrimPassword}
					onChange={handleChange}
					label="Confirm Password"
					required
				/>
				<Button type="submit">SIGN UP</Button>
			</form>
		</SignupContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	signUp: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
