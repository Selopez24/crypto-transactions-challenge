import styled from "styled-components";

export const PageWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: calc(100vh - 20px);
	padding: 0px 60px;
	gap: 40px;

	@media (width <= 500px) {
		padding: 0;
	}
`;

export const TableWrapper = styled.section`
	overflow-x: auto;
	width: 100%;
	height: 100%;
`;

export const DashboardCardsContainer = styled.div`
	display: flex;
	gap: 16px;
	width: 100%;
	flex-wrap: wrap;
`;

export const TitleContainer = styled.div`
	display: flex;
	width: 100%;
`;

export const InputContainer = styled.div`
	display: flex;
	width: 100%;

	& > div {
		width: 40%;
	}
`;
