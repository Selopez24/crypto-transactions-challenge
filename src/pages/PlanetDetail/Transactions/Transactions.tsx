import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { usePlanetDetail } from "../../../data/queries";
import {
	Container,
	FilterContainer,
	TableContainer,
} from "./Transactions.styled";
import {
	CurrencyLabels,
	TRANSACTION_STATUS_LABELS,
	filterTransactions,
} from "./transactions.service";
import { keyBy } from "lodash";
import { Decimal } from "decimal.js";
import LoadingSpinner from "../../../components/LoadingSpinner";
import { Currency } from "../../../types/Transaction";
import ButtonSelect from "../../../components/ButtonSelect";
import { THead, Table, Th, Tr } from "../../../components/Table";
import {
	AmountIcon,
	CoinsIcon,
	DateIcon,
	ResidentIcon,
	StatusIcon,
} from "../../../assets/icons/Icons";
import StatusIndicator from "../../../components/StatusIndicator";

const CURRENCY_FILER_OPTIONS = [
	{
		label: "None",
		value: "none",
	},
	{
		label: CurrencyLabels.GCS,
		value: Currency.GCS,
		tag: Currency.GCS,
	},
	{
		label: CurrencyLabels.ICS,
		value: Currency.ICS,
		tag: Currency.ICS,
	},
];

const Transactions = () => {
	const { id } = useParams();

	const [currencyFilter, setCurrencyFilter] = useState(
		CURRENCY_FILER_OPTIONS[0].value
	);

	const { data: details, isLoading } = usePlanetDetail(id);

	const { transactions, residents } = details ?? {};

	const [transactionsToDisplay, setTransactionsToDisplay] =
		useState(transactions);

	const residentsById = useMemo(() => keyBy(residents, "id"), [residents]);

	const handleCurrencyFilter = (value: string) => {
		setCurrencyFilter(value);
	};

	useEffect(() => {
		if (currencyFilter && transactions) {
			const filteredTransactions = filterTransactions(transactions, {
				field: "currency",
				value: currencyFilter,
			});

			setTransactionsToDisplay(filteredTransactions);
		}
	}, [currencyFilter, transactions]);

	useEffect(() => {
		if (!isLoading) {
			setTransactionsToDisplay(transactions);
		}
	}, [transactions, isLoading]);

	if (isLoading) {
		return <LoadingSpinner />;
	}

	return (
		<Container>
			<FilterContainer>
				<span>Currency Filter :</span>
				<ButtonSelect
					selected={currencyFilter}
					options={CURRENCY_FILER_OPTIONS}
					onSelect={handleCurrencyFilter}
				/>
			</FilterContainer>
			<TableContainer>
				<Table>
					<THead>
						<Tr>
							<Th icon={<ResidentIcon />}>User</Th>
							<Th icon={<DateIcon />}>Date</Th>
							<Th icon={<CoinsIcon />}>Currency</Th>
							<Th icon={<AmountIcon />}>Amount</Th>
							<Th icon={<StatusIcon />}>Status</Th>
						</Tr>
					</THead>
					<tbody>
						{transactionsToDisplay?.map((transaction) => (
							<Tr key={transaction.id}>
								<td>{residentsById[transaction.user].name}</td>
								<td>{new Date(transaction.date).toLocaleString()}</td>
								<td>{transaction.currency}</td>
								<td>{new Decimal(transaction.amount).toFixed(3).toString()}</td>
								<td>
									<StatusIndicator
										status={transaction.status}
										label={TRANSACTION_STATUS_LABELS[transaction.status]}
									/>
								</td>
							</Tr>
						))}
					</tbody>
				</Table>
			</TableContainer>
		</Container>
	);
};

export default Transactions;
