import styled from "styled-components";

export const PlanetDetailWrapper = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 0px 40px;
	height: calc(100vh - 20px);

	@media (width <= 500px) {
		padding: 0;
		height: 100%;
	}
`;

export const PlanetDetailContent = styled.div``;
