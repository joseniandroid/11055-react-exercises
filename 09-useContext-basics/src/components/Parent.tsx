import { CounterContext, TriValueContext } from '../contexts';

import { Child1 } from './children';
import { useState } from 'react';

export const Parent = () => {
  const [counter, setCounter] = useState(0);
  const [inputText, setInputText] = useState('');

  return (
    <TriValueContext.Provider
      value={{
        stringProp: inputText,
        booleanProp: false,
        numberProp: 100,
      }}
    >
      <CounterContext.Provider
        value={{
          counter,
          hello: 'universe',
          fruits: [],
        }}
      >
        <Child1 />
        <input
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </CounterContext.Provider>
    </TriValueContext.Provider>
  );
};
