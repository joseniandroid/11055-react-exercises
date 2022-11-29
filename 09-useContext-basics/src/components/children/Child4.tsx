import { Child5 } from './Child5';
import { ChildProps } from './Child1';
import styles from './Child.module.css';

export const Child4 = ({ counter }: ChildProps) => {
  return (
    <div className={styles.childBox4}>
      <Child5 counter={counter} />
    </div>
  );
};
