import React from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/custom-button.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { SignupContainer, SignupTitle } from "./sign-up.styles";

class SignUp extends React.Component {
	constructor() {
		super();

		this.state = {
			displayName: "",
			email: "",
			password: "",
			confrimPassword: ""
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { displayName, email, password, confrimPassword } = this.state;

		if (password !== confrimPassword) {
			alert("Passwords don't match");
			return;
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);

			createUserProfileDocument(user, { displayName });

			this.setState({
				displayName: "",
				email: "",
				password: "",
				confrimPassword: ""
			});
		} catch (err) {
			console.error(err);
		}
	};

	handleChange = event => {
		const { name, value } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { displayName, email, password, confrimPassword } = this.state;
		return (
			<SignupContainer>
				<SignupTitle>I do not have an account</SignupTitle>
				<span>Sign up with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						onChange={this.handleChange}
						label="Display Name"
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						onChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						onChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confrimPassword"
						value={confrimPassword}
						onChange={this.handleChange}
						label="Confirm Password"
						required
					/>
					<Button type="submit">SIGN UP</Button>
				</form>
			</SignupContainer>
		);
	}
}

export default SignUp;
