import styles from './quizCard.module.css';
import { Button } from '../ButtonControl/Button';
import { ComplexityOfQuiz } from '../ComplexityOfQuiz/ComplexityOfQuiz';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
export const QuizCard = () => {
  const quiz = useSelector((state) => state.quizzes);
  let { type } = useParams();
  if (quiz.quizzes[type] !== undefined) {
    return quiz.quizzes[type].map((quiz) => {
      return (
        <div className={styles.quizCardContainer}>
          <div className={styles.header}>
            <div className={styles.nameOfQuiz}>{quiz.quizzesName}</div>
            <div className={styles.dificultyLvl}>
              сложность: <ComplexityOfQuiz complexity={quiz.difficultyLevel} />
            </div>
          </div>
          <div className={styles.footer}>
            <div className={styles.countOfQuestions}>
              Количество вопросов: {quiz.questions.length}
            </div>
            <Button text={'cрезать гриб'} />
          </div>
        </div>
      );
    });
  }
};
