import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	&:visited {
		color: #8b8b8b;
	}

	display: flex;
	justify-content: center;
	align-items: center;
	width: 164px;
	height: 58px;
	color: #8b8b8b;

	&.active {
		color: black;
		&::before {
			content: "";
			position: absolute;
			background-color: #d5dfe6;
			border-radius: 200px;
			width: 164px;
			height: 58px;
			z-index: -1;

			@media (width <= 500px) {
				height: 42px;
			}
		}
	}
`;
