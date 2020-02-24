import React from "react";
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
		const { emailSignIn } = this.props;
		const { email, password } = this.state;

		emailSignIn(email, password);
	};

	handleChange = event => {
		const { value, name } = event.target;

		this.setState({ [name]: value });
	};

	render() {
		const { googleSigIn } = this.props;
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
						<Button
							type="button"
							isGoogleSignIn
							onClick={googleSigIn}
						>
							{" "}
							Sign in with Google
						</Button>
					</ButtonsContainer>
				</form>
			</SigninContainer>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	googleSigIn: () => dispatch(googleSignInStart()),
	emailSignIn: (email, password) =>
		dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(Signin);
