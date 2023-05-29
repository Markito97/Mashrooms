import styles from './quizCard.module.css';
import { Button } from '../ButtonControl/Button';
import { ComplexityOfQuiz } from '../ComplexityOfQuiz/ComplexityOfQuiz';
export const QuizCard = (props) => {
  console.log(props.quizInfo);
  return (
    <div className={styles.quizCardContainer}>
      <div className={styles.header}>
        <div className={styles.nameOfQuiz}>Для опытных грибников</div>
        <div className={styles.dificultyLvl}>
          <ComplexityOfQuiz />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.countOfQuestions}>10 вопросов</div>
        <Button text={'cрезать гриб'} />
      </div>
    </div>
  );
};
