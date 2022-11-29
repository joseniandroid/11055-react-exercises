import { bankReducer } from '../reducers/bank';
import { useReducer } from 'react';

export const BankReducerDemo = () => {
  const [state, dispatch] = useReducer(bankReducer, { coins: 500 });

  return (
    <>
      <h3>BankReducerDemo</h3>

      <h2>coins: {state.coins}</h2>

      <button>Withdraw</button>
      <span style={{ marginLeft: '1rem' }}></span>
      <button>Deposit</button>
    </>
  );
};
