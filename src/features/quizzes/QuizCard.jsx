import styles from './quizCard.module.css';
import { Button } from '../../components/ButtonControl/Button';
import { ComplexityOfQuiz } from '../../components/ComplexityOfQuiz/ComplexityOfQuiz';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuizzes } from './use-Quizzes';
export const QuizCard = () => {
  const [quizzes, { status, error, qty }] = useQuizzes();

  return (
    <>
      {status === 'loading' && <h2>Loading....</h2>}
      {error && <h2>Cant fetch data</h2>}
      {quizzes.map((quiz) => {
        return (
          <div className={styles.quizCardContainer} key={quiz._id}>
            <div className={styles.header}>
              <div className={styles.nameOfQuiz}>{quiz.quizzesName}</div>
              <div className={styles.dificultyLvl}>
                сложность:{' '}
                <ComplexityOfQuiz complexity={quiz.difficultyLevel} />
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
      })}
    </>
  );
};
