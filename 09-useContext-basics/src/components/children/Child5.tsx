import { ChildProps } from './Child1';
import styles from './Child.module.css';

export const Child5 = ({ counter }: ChildProps) => {
  return (
    <div className={styles.childBox5}>
      <h1 className={styles.boxHeader}>{counter}</h1>
    </div>
  );
};
