import styled from "styled-components";

export const DetailContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
	width: 160px;
	background-color: #d5dfe6;
	border-radius: 8px;
	box-sizing: border-box;
	padding: 8px 16px;
`;

export const LabelContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	font-size: 14px;
	line-height: 20px;
	color: #8b8b8b;
`;

export const ValueContainer = styled.div`
	display: flex;
	justify-content: flex-end;
	width: 100%;
	font-size: 18px;
	color: black;
	text-transform: capitalize;
`;

export const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: rgba(84, 96, 138, 0.2);
	border-radius: 8px;
	width: 24px;
	height: 24px;
	color: black;
`;
