import { bankReducer, deposit, withdraw } from '../reducers/bank';

import { useReducer } from 'react';

export const BankReducerDemo = () => {
  const [state, dispatch] = useReducer(bankReducer, { coins: 500 });

  return (
    <>
      <h3>BankReducerDemo</h3>

      <h2>coins: {state.coins}</h2>

      <button onClick={() => dispatch(withdraw(10))}>Withdraw</button>
      <span style={{ marginLeft: '1rem' }}></span>
      <button onClick={() => dispatch(deposit(100))}>Deposit</button>
    </>
  );
};
