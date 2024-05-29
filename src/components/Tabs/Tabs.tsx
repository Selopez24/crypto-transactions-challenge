import React from "react";
import { Container, Content, TabContainer } from "./Tabs.styled";
import { Outlet } from "react-router-dom";

type Props = {
	children: React.ReactNode;
};

const Tabs = ({ children }: Props) => {
	return (
		<Container>
			<TabContainer>{children}</TabContainer>
			<Content>
				<Outlet />
			</Content>
		</Container>
	);
};

export default Tabs;
