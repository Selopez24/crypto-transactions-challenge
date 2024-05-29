import { useCallback, useEffect, useState } from "react";

type DataType<T> = Array<T> | undefined;

const PAGE_SIZE = 10;

type PaginationType<T> = {
	dataToDisplay: DataType<T>;
	currentPage: number;
	totalData: number;
	totalDisplayedData: number | undefined;
	nextPage: () => void;
	previousPage: () => void;
	resetPagination: () => void;
	setPaginatedData: (data: DataType<T>) => DataType<T>;
};

export const usePagination = <T>(data: DataType<T>): PaginationType<T> => {
	const [dataToDisplay, setDataToDisplay] = useState([] as DataType<T>);
	const [currentPage, setCurrentPage] = useState(1);

	const setPaginatedData = useCallback(
		(data: DataType<T>) => {
			const start = (currentPage - 1) * PAGE_SIZE;
			const end = currentPage * PAGE_SIZE;
			const paginatedData = data?.slice(start, end);
			setDataToDisplay(paginatedData);
			return paginatedData;
		},
		[currentPage]
	);

	const nextPage = () => {
		if (dataToDisplay && dataToDisplay?.length < PAGE_SIZE) return;
		setCurrentPage((prevCurrentPageValue) => prevCurrentPageValue + 1);
	};
	const previousPage = () => {
		if (currentPage === 1) return;
		setCurrentPage((prevPreviousPageValue) => prevPreviousPageValue - 1);
	};

	const resetPagination = () => {
		setCurrentPage(1);
	};

	useEffect(() => {
		setPaginatedData(data);
	}, [data, setPaginatedData]);

	return {
		dataToDisplay,
		currentPage,
		totalData: data?.length ?? 0,
		totalDisplayedData: dataToDisplay?.length,
		nextPage,
		previousPage,
		resetPagination,
		setPaginatedData,
	};
};
