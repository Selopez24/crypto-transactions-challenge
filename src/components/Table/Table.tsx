import { ReactNode } from "react";
import {
	THead as StyledTHead,
	Table as StyledTable,
	Tr as StyledTr,
	Th as StyledTh,
	IconContainer,
	SortableContainer,
} from "./Table.styled";
import { SortDirection } from "../../hooks/useSort";
import SortIcon from "./SortIcon";

type ChildrenProp = { children: React.ReactNode };

type ThProps = {
	children?: ReactNode;
	icon?: ReactNode;
	onClick?: () => void;
	$fixedWith?: string;
};

type SortableHeaderProps = ThProps & {
	sortDirection: SortDirection;
	label: string;
};

export const Table = ({ children }: ChildrenProp) => (
	<StyledTable>{children}</StyledTable>
);

export const THead = ({ children }: ChildrenProp) => (
	<StyledTHead>{children}</StyledTHead>
);

export const Tr = ({ children }: ChildrenProp) => (
	<StyledTr>{children}</StyledTr>
);

export const Th = ({ children, icon, onClick, $fixedWith }: ThProps) => (
	<StyledTh onClick={onClick} $fixedWith={$fixedWith}>
		<div>
			{icon && <IconContainer>{icon}</IconContainer>}
			{children}
		</div>
	</StyledTh>
);

export const SortableHeader = ({
	label,
	sortDirection,
	onClick,
	icon,
}: SortableHeaderProps) => {
	return (
		<Th onClick={onClick} icon={icon}>
			<SortableContainer>
				<span>{label} </span>
				<SortIcon sortDirection={sortDirection} />
			</SortableContainer>
		</Th>
	);
};
