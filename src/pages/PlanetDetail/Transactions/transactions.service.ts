import {
	Currency,
	Transaction,
	TransactionStatus,
} from "../../../types/Transaction";

export const TRANSACTION_STATUS_LABELS = {
	[TransactionStatus.Completed]: "Completed",
	[TransactionStatus.Blocked]: "Blocked",
	[TransactionStatus.InProgress]: "In Progress",
};

type TransactionKey = keyof Transaction;

export type CurrencyKey = keyof Currency;

type FilterField = {
	field: TransactionKey;
	value: string;
};

export const CurrencyLabels = {
	[Currency.GCS]: "Galactic Credit Standard",
	[Currency.ICS]: "Imperial Crown Standard",
};

export const filterTransactions = (
	transactions: Transaction[],
	filter: FilterField
) => {
	if (filter.value === "none") {
		return transactions;
	}

	return transactions.filter(
		(transaction) =>
			transaction[filter.field as TransactionKey] === filter.value
	);
};
