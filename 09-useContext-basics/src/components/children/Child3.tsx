import { Child4 } from './Child4';
import { TriValueContext } from '../../contexts';
import styles from './Child.module.css';
import { useContext } from 'react';

export const Child3 = () => {
  const { booleanProp } = useContext(TriValueContext);

  return (
    <div className={styles.childBox3}>
      <Child4 />
      <h1 className={styles.boxHeader}>{booleanProp.toString()}</h1>
    </div>
  );
};
