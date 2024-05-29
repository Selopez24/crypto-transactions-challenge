import { orderBy } from "lodash";
import { useEffect, useState } from "react";

type DataType<T> = Array<T> | undefined;

export enum SortDirection {
	Ascending = "asc",
	Descending = "desc",
	None = "none",
}

type SortType<T> = {
	sortDirection: SortDirection;
	sortedData: DataType<T>;
	sortData: (field: string) => DataType<T>;
};

export const useSort = <T>(data: DataType<T>): SortType<T> => {
	const [sortedData, setSortedData] = useState(data);
	const [sortDirection, setSortDirection] = useState(SortDirection.None);

	const sortData = (field: string) => {
		const newSortDirection =
			sortDirection === SortDirection.None ||
			sortDirection === SortDirection.Descending
				? SortDirection.Ascending
				: SortDirection.Descending;

		setSortDirection(newSortDirection);

		const sortedData = orderBy(data, [field], [newSortDirection]);

		setSortedData(sortedData);

		return sortedData;
	};

	useEffect(() => {
		if (data) setSortedData(data);
	}, [data]);

	return {
		sortDirection,
		sortedData,
		sortData,
	};
};
