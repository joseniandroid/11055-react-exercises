import { CounterContext } from '../../contexts';
import styles from './Child.module.css';
import { useContext } from 'react';

export const Child5 = () => {
  const { counter } = useContext(CounterContext);

  return (
    <div className={styles.childBox5}>
      <h1 className={styles.boxHeader}>{counter}</h1>
    </div>
  );
};
