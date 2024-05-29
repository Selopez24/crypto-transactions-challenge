import React from "react";
import { StyledNavLink } from "./Tab.styled";

type Props = {
	label: string;
	path: string;
};

const Tab = ({ label, path }: Props) => {
	return <StyledNavLink to={path}>{label}</StyledNavLink>;
};

export default Tab;
