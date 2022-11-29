import { Child2 } from './Child2';
import styles from './Child.module.css';

export type ChildProps = {
  counter: number;
};

export const Child1 = ({ counter }: ChildProps) => {
  return (
    <div className={styles.childBox1}>
      <Child2 counter={counter} />
      <h1 className={styles.boxHeader}>{counter}</h1>
    </div>
  );
};
