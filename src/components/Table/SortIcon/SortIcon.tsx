import React from "react";
import { SortDirection } from "../../../hooks/useSort";
import {
	SortUpIcon,
	SortIcon as SortArrows,
	SortDownIcon,
} from "../../../assets/icons/Icons";

type Props = {
	sortDirection: SortDirection;
};

const SortIcon = ({ sortDirection }: Props) => {
	return (
		<>
			{sortDirection === SortDirection.None && <SortArrows />}
			{sortDirection === SortDirection.Ascending && <SortUpIcon />}
			{sortDirection === SortDirection.Descending && <SortDownIcon />}
		</>
	);
};

export default SortIcon;
