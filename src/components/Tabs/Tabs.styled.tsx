import styled from "styled-components";

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	margin: 20px 0;
	gap: 40px;
	width: 100%;
	height: 100%;
	overflow: auto;
`;

export const TabContainer = styled.nav`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	background-color: white;
	width: 320px;
	height: 74px;
	margin: 0 auto;
	border-radius: 200px;
	z-index: 0;
	padding: 0px 15px;
	box-sizing: border-box;
	position: relative;

	@media (width <= 500px) {
		height: 50px;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
	overflow: auto;
`;
