import { createContext } from 'react';

export const initialState = {
  counter: 0,
  hello: 'world',
  fruits: ['apple', 'banana', 'orange'],
};

export const CounterContext = createContext(initialState);
