import { Child3 } from './Child3';
import { TriValueContext } from '../../contexts';
import styles from './Child.module.css';
import { useContext } from 'react';

export const Child2 = () => {
  const { stringProp } = useContext(TriValueContext);

  return (
    <div className={styles.childBox2}>
      <Child3 />
      <h1 className={styles.boxHeader}>{stringProp}</h1>
    </div>
  );
};
