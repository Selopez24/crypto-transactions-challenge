export enum TransactionStatus {
	Completed = "completed",
	Blocked = "blocked",
	InProgress = "inProgress",
}

export enum Currency {
	GCS = "GCS",
	ICS = "ICS",
}

export type Transaction = {
	amount: number;
	currency: Currency;
	date: string;
	id: string;
	status: TransactionStatus;
	user: string;
};
