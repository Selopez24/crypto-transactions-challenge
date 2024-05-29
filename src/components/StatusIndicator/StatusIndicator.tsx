import { StyledStatusIndicator } from "./StatusIndicator.styled";
import { TransactionStatus } from "../../types/Transaction";

type Props = {
	status: TransactionStatus;
	label: string;
};

const COLORS_BY_STATUS = {
	[TransactionStatus.Completed]: "#338453",
	[TransactionStatus.InProgress]: "#54608a",
	[TransactionStatus.Blocked]: "#DD4E1E",
};

const StatusIndicator = ({ status, label }: Props) => {
	return (
		<StyledStatusIndicator $color={COLORS_BY_STATUS[status]}>
			{label}
		</StyledStatusIndicator>
	);
};

export default StatusIndicator;
