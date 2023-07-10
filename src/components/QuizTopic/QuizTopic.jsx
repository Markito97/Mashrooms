import styles from './QuizTopic.module.css';

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
