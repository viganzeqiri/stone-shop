import React from "react";

import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import "./signin.styles.scss";

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
			<div className="sign-in">
				<h2 className="title">I already have an account</h2>
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

					<div className="buttons">
						<Button type="submit"> SIGN IN</Button>
						<Button onClick={signInWithGoogle} isGoogleSignIn>
							{" "}
							Sign in with Google
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default Signin;
