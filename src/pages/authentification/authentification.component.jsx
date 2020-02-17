import React from "react";

import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/sign-up.component";

import "./authentification.styles.scss";

const Authentification = () => {
	return (
		<div className="auth">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default Authentification;
