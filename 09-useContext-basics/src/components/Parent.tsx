import { Child1 } from './children';
import { useState } from 'react';

export const Parent = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Child1 counter={counter} />
      <h1>{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
    </>
  );
};
