import { ReactNode } from "react";
import {
	DetailContainer,
	IconContainer,
	LabelContainer,
	ValueContainer,
} from "./DetailCard.styled";

type Props = {
	label: string;
	value: string | number | undefined;
	icon?: ReactNode;
};

const fallbackICon = "❂";

const DetailCard = ({ label, value, icon }: Props) => {
	return (
		<DetailContainer>
			<LabelContainer>
				<IconContainer>{icon ?? fallbackICon}</IconContainer>
				<span>{label}</span>
			</LabelContainer>
			<ValueContainer>
				<span>{value ?? "-"}</span>
			</ValueContainer>
		</DetailContainer>
	);
};

export default DetailCard;
