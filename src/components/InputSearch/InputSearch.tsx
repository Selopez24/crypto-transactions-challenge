import React from "react";
import {
	Container,
	IconContainer,
	StyledInputSearch,
} from "./InputSearch.styled";
import { SearchIcon } from "../../assets/icons/Icons";

type Props = {
	placeholder: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => any;
	value: string;
};

const InputSearch = ({ placeholder, onChange, value }: Props) => {
	return (
		<Container>
			<IconContainer>
				<SearchIcon />
			</IconContainer>
			<StyledInputSearch
				placeholder={placeholder}
				onChange={onChange}
				value={value}
			/>
		</Container>
	);
};

export default InputSearch;
