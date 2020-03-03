import styled from "styled-components";

export const SigninContainer = styled.div`
	width: 380px;
	display: flex;
	flex-direction: column;

	@media screen and (max-width: 800px) {
		margin-top: 100px;
		width: 90%;
	}
`;

export const SigninTitle = styled.h2`
	margin: 10px 0;
`;

export const ButtonsContainer = styled.div`
	display: flex;
	justify-content: space-between;
`;
