import { Button, Container, Label, Tag } from "./ButtonSelect.styled";

type Option = {
	label: string;
	value: string;
	tag?: string;
};

type Props = {
	options: Option[];
	onSelect: (value: string) => void;
	selected: string;
};

const ButtonSelect = ({ options, onSelect, selected }: Props) => {
	const handleSelect = (value: string) => {
		onSelect(value);
	};

	return (
		<Container>
			{options.map((option) => (
				<Button
					$isActive={selected === option.value}
					key={option.label}
					onClick={() => handleSelect(option.value)}
				>
					{option.tag && <Tag>{option.tag}</Tag>}
					<Label>{option.label}</Label>
				</Button>
			))}
		</Container>
	);
};

export default ButtonSelect;
