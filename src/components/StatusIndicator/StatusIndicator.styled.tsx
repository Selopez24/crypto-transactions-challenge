import styled from "styled-components";

export const StyledStatusIndicator = styled.div<{ $color: string }>`
	display: flex;
	align-items: center;
	gap: 8px;
	&::before {
		content: "✦";
		display: flex;
		justify-content: center;
		align-items: center;
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: ${(props) => props.$color};
		margin-right: 8px;
		color: #f0ece1;
	}
`;
