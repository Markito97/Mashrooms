import styles from './Quiz.module.css';
export const Quiz = (props) => {
  console.log(props.color);
  return (
    <div className={styles.quizContainer}>
      <div className={`${styles.quizType} ${styles[props.color]}`}>
        {props.quizType}
      </div>
      <div className={styles.quizCode}>{props.quizCode}</div>
    </div>
  );
};
