export enum transactionTypes {
  income,
  outcome,
  loan,
  investment,
}

type TransactionTypes = number;

export interface ITransaction {
  type: TransactionTypes;
  _id: string;
  amount: number;
  name: {
    first: string;
    last: string;
  };
  company: string;
  email: string;
  phone: string;
  address: string;
}
