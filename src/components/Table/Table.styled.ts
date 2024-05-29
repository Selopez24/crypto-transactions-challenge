import styled from "styled-components";

export const Table = styled.table`
	width: 100%;
	border-collapse: collapse;
	border-spacing: 15px;
	table-layout: auto;
	position: relative;

	@media (width <= 500px) {
		width: 2000px;
	}
`;

export const THead = styled.thead`
	text-align: left;
`;

export const Tr = styled.tr`
	cursor: pointer;
	border-bottom: 1px solid #d3d3d3;
	line-height: 50px;

	td {
		padding: 0 16px;
		color: black;
		background-color: #f0ece1;
	}

	& > td:first-child {
		position: sticky;
		left: 0;
	}
`;

export const Th = styled.th<{ $fixedWith: string | undefined }>`
	padding: 8px 16px;
	background-color: #54608a;
	font-weight: 500;
	text-align: left;
	position: sticky;
	top: 0;
	left: 0;
	& > div {
		display: flex;
		align-items: center;
		gap: 8px;
		width: ${(props) => props.$fixedWith};
	}

	&:not(:last-child) {
		border-right: 1px solid;
	}

	&:first-child {
		z-index: 1;
		border-top-left-radius: 16px;
	}

	&:last-child {
		border-top-right-radius: 16px;
	}

	@media (width <= 500px) {
		&:first-child {
			width: 80px;
		}
	}
`;

export const IconContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 24px;
	height: 24px;
	color: inherit;

	svg {
		width: 16px;
		height: 16px;
	}
`;

export const SortableContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
	svg {
		width: 16px;
		height: 16px;
	}
`;
