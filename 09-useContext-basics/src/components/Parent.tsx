import { Child1 } from './children';
import { CounterContext } from '../contexts';
import { useState } from 'react';

export const Parent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <CounterContext.Provider value={counter}>
      <Child1 />
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </CounterContext.Provider>
  );
};
