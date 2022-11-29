import { BankAction, BankActionType } from './actions';

import { BankState } from './state';

export const bankReducer = (state: BankState, action: BankAction) => {
  switch (action.type) {
    case BankActionType.DEPOSIT:
      return {
        ...state,
        coins: state.coins + action.payload,
      };

    case BankActionType.WITHDRAW:
      return {
        ...state,
        coins: state.coins - action.payload,
      };

    default:
      return state;
  }
};
