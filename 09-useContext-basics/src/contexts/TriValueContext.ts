import { createContext } from 'react';

export const TriValueContext = createContext({
  stringProp: '',
  booleanProp: false,
  numberProp: 10,
});
