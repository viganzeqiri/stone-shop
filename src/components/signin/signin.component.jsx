import React from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import {
	SigninContainer,
	SigninTitle,
	ButtonsContainer
} from "./signin.styles";

class Signin extends React.Component {
	constructor() {
		super();

		this.state = {
			email: "",
			password: ""
		};
	}

	handleSubmit = async event => {
		event.preventDefault();

		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({ email: "", password: "" });
		} catch (err) {
			console.error(err);
		}
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<SigninContainer>
				<SigninTitle>I already have an account</SigninTitle>
				<span>Sign in with your email and password</span>

				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={this.state.password}
						handleChange={this.handleChange}
						label="password"
						required
					/>

					<ButtonsContainer>
						<Button type="submit"> SIGN IN</Button>
						<Button isGoogleSignIn onClick={signInWithGoogle}>
							{" "}
							Sign in with Google
						</Button>
					</ButtonsContainer>
				</form>
			</SigninContainer>
		);
	}
}

export default Signin;
