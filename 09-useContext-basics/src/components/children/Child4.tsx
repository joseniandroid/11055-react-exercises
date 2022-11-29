import { Child5 } from './Child5';
import { TriValueContext } from '../../contexts';
import styles from './Child.module.css';
import { useContext } from 'react';

export const Child4 = () => {
  const { numberProp } = useContext(TriValueContext);
  return (
    <div className={styles.childBox4}>
      <Child5 />
      <h1 className={styles.boxHeader}>{numberProp}</h1>
    </div>
  );
};
