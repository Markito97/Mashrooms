import styles from './quizCard.module.css';
import { Button } from '../ButtonControl/Button';
import { ComplexityOfQuiz } from '../ComplexityOfQuiz/ComplexityOfQuiz';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

export const QuizCard = () => {
  const { quizzes } = useSelector((state) => state.quizzes);
  console.log(quizzes);
  return quizzes.map((quiz) => {
    return (
      <div className={styles.quizCardContainer} key={quiz._id}>
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
          <Link to={`/quizStart/${quiz._id}`}>
            <Button text={'cрезать гриб'} />
          </Link>
        </div>
      </div>
    );
  });
};
