import { BankActionType, bankReducer } from '../reducers/bank';

import { useReducer } from 'react';

export const BankReducerDemo = () => {
  const [state, dispatch] = useReducer(bankReducer, { coins: 500 });

  const handleDeposit = () => {
    const depositAction = {
      type: BankActionType.DEPOSIT,
      payload: 100,
    };
    dispatch(depositAction);
  };

  return (
    <>
      <h3>BankReducerDemo</h3>

      <h2>coins: {state.coins}</h2>

      <button>Withdraw</button>
      <span style={{ marginLeft: '1rem' }}></span>
      <button onClick={handleDeposit}>Deposit</button>
    </>
  );
};
