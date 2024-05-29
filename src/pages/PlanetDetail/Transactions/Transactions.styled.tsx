import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	overflow: hidden;
`;

export const FilterContainer = styled.div`
	display: flex;
	gap: 16px;
	margin-bottom: 40px;
	align-items: center;

	@media (width <= 500px) {
		flex-direction: column;
		table {
			height: 500px;
		}
	}
`;

export const TableContainer = styled.div`
	overflow: auto;
	height: 85%;

	@media (width <= 500px) {
		height: 500px;
	}
`;
