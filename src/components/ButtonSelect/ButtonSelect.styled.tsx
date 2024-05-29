import styled from "styled-components";

export const Tag = styled.span`
	margin-right: 8px;

	border-radius: 200px;
	background-color: grey;
	font-size: 12px;
	line-height: 16px;
	z-index: -1;
	padding: 8px 16px;
`;

export const Button = styled.button<{ $isActive: boolean }>`
	border-radius: 200px;
	background-color: ${(props) => (props.$isActive ? "#DD4E1E" : "grey")};
	border: none;
	padding: 5px 16px;
	height: 42px;
	font-weight: ${(props) => props.$isActive && 500};
	z-index: 0;
	color: white;

	${Tag} {
		background-color: ${(props) => props.$isActive && "#54608A"};
		color: white;
	}
`;

export const Container = styled.div`
	display: flex;
	gap: 8px;

	@media (width <= 500px) {
		flex-direction: column;
	}
`;

export const Label = styled.span``;
