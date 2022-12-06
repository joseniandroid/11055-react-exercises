export enum BankActionType {
  DEPOSIT = 'deposit',
  WITHDRAW = 'withdraw',
}

export type BankAction = {
  type: BankActionType;
  payload: number;
};

export const deposit = (coins: number): BankAction => ({
  type: BankActionType.DEPOSIT,
  payload: coins,
});

export const withdraw = (coins: number): BankAction => ({
  type: BankActionType.WITHDRAW,
  payload: coins,
});
