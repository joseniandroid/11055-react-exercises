export enum BankActionType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}

export type BankAction = {
  type: BankActionType;
  payload: number;
};
