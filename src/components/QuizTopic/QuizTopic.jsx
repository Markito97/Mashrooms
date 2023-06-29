import styles from './QuizTopic.module.css';
import { useParams } from 'react-router-dom';
export const QuizTopic = (props) => {
  return (
    <div className={styles.quizContainer}>
      <div className={`${styles.quizType} ${styles[props.color]}`}>
        {props.quizType}
      </div>
      <div className={styles.quizCode}>{props.quizCode}</div>
    </div>
  );
};
