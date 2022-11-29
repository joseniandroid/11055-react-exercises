import { Child2 } from './Child2';
import { CounterContext } from '../../contexts';
import styles from './Child.module.css';
import { useContext } from 'react';

export const Child1 = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div className={styles.childBox1}>
      <Child2 />
      <h1 className={styles.boxHeader}>{counter}</h1>
    </div>
  );
};
