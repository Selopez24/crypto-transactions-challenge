import styled, { keyframes } from "styled-components";

const animation = keyframes`
to{
 transform: rotate(360deg);
}
`;

export const Spinner = styled.div`
	width: 6rem;
	height: 6rem;
	border: 5px solid #ccc;
	border-radius: 50%;
	border-top-color: black;
	animation: ${animation} 0.8s linear infinite;
`;

export const Container = styled.div`
	position: absolute;
	top: 40%;
	left: 50%;

	@media (width <= 500px) {
		left: 40%;
	}
`;
