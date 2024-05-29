import styled from "styled-components";

export const StyledInputSearch = styled.input`
	width: 342px;
	height: 36px;
	border-radius: 200px;
	padding: 0 0 0 40px;
	box-sizing: border-box;
	background-color: rgba(73, 114, 132, 0.7);
	border: none;
	color: white;

	&::placeholder {
		color: white;
	}
`;

export const IconContainer = styled.div`
	width: 20px;
	height: 20px;
	position: relative;
	left: 35px;
	color: white;
`;

export const Container = styled.div`
	margin-left: -20px;
	display: flex;
	align-items: center;
`;
