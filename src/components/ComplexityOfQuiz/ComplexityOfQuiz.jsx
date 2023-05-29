import styles from './complexityOfQuiz.module.css';
import { ReactComponent as ActiveMushroom } from '../../assets/icons/activeMushroom.svg';
import { ReactComponent as InactiveMushroom } from '../../assets/icons/inactiveMushroom.svg';

export const ComplexityOfQuiz = () => {
  return (
    <div className={styles.complexityWrapper}>
      <ActiveMushroom />
      <InactiveMushroom />
      <InactiveMushroom />
      <InactiveMushroom />
      <InactiveMushroom />
    </div>
  );
};
