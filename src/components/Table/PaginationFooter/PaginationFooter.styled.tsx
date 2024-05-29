import styled from "styled-components";

export const PaginationButton = styled.button`
	background-color: #54608a;
	border: none;
	cursor: pointer;
	color: inherit;
	border: 1px solid white;
	height: 32px;
	width: 32px;
	border-radius: 8px;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	width: 100%;
`;

export const CurrentPage = styled.span`
	font-size: 21px;
	width: 8px;
	text-align: center;
	font-weight: 600;
`;

export const TotalDisplayed = styled.span`
	margin-left: 8px;
	word-spacing: 8px;
	font-weight: 600;
`;
