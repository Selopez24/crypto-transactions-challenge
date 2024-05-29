import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.header`
	display: flex;
	width: 100%;
	justify-content: center;
	flex-direction: column;
`;

export const DetailsContainer = styled.div`
	display: flex;
	align-items: center;
	gap: 30px;
	flex-wrap: wrap;
	margin-bottom: 20px;
	width: 90%;

	@media (width <= 500px) {
		gap: 15px;
		justify-content: center;
		width: 100%;
	}
`;

export const StyledLink = styled(Link)`
	color: white;
	font-size: w0px;
	display: flex;
	align-items: center;
	gap: 8px;

	svg {
		color: inherit;
	}
`;

export const PlanetName = styled.h1`
	font-size: 48px;
`;
