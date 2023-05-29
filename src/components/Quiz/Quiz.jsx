import styles from './Quiz.module.css';
import { useGetJSQuizzesQuery } from '../../redux';
import { useParams } from 'react-router-dom';
export const Quiz = (props) => {
  return (
    <div className={styles.quizContainer}>
      <div className={`${styles.quizType} ${styles[props.color]}`}>
        {props.quizType}
      </div>
      <div className={styles.quizCode}>{props.quizCode}</div>
    </div>
  );
};
