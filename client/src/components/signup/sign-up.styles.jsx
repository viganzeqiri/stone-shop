import styled from "styled-components";

export const SignupContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 380px;

	@media screen and (max-width: 800px) {
		margin-top: 100px;
		width: 90%;
	}
`;

export const SignupTitle = styled.h2`
	margin: 10px 0;
`;
