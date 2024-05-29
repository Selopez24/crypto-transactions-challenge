import React from "react";
import {
	SquaredArrowBack,
	SquaredArrowNext,
} from "../../../assets/icons/Icons";
import {
	Container,
	CurrentPage,
	PaginationButton,
	TotalDisplayed,
} from "./PaginationFooter.styled";

type Props = {
	totalDisplayed: number | undefined;
	totalData: number;
	previousPage: () => void;
	nextPage: () => void;
	currentPage: number;
};

const PaginationFooter = ({
	totalData,
	totalDisplayed,
	previousPage,
	nextPage,
	currentPage,
}: Props) => {
	return (
		<Container>
			<PaginationButton onClick={previousPage}>
				<SquaredArrowBack />
			</PaginationButton>
			<CurrentPage>{currentPage}</CurrentPage>
			<PaginationButton onClick={nextPage}>
				<SquaredArrowNext />
			</PaginationButton>
			<TotalDisplayed>
				Displaying {totalDisplayed} of {totalData}
			</TotalDisplayed>
		</Container>
	);
};

export default PaginationFooter;
