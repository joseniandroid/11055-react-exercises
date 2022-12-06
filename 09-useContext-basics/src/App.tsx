import './App.css';

import { Parent } from './components';
import { TriValueContext } from './contexts';
import { useContext } from 'react';

function App() {
  const { stringProp } = useContext(TriValueContext);

  return (
    <>
      <h2>{stringProp}</h2>
      <Parent />
    </>
  );
}

export default App;
