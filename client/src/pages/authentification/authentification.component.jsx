import React from "react";

import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/sign-up.component";

import { AuthContainer } from "./authentification.styles";

const Authentification = () => {
	return (
		<AuthContainer>
			<SignIn />
			<SignUp />
		</AuthContainer>
	);
};

export default Authentification;
