import styles from './quizCard.module.css';
import { Button } from '@mui/material';
import { ComplexityOfQuiz } from '../../components/ComplexityOfQuiz/ComplexityOfQuiz';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useQuizzes } from './use-Quizzes';
import { useDispatch } from 'react-redux';
import { resetToDefault } from '../answers/answer-slice';
export const QuizCard = () => {
  const [quizzes, { status, error, qty }] = useQuizzes();
  const dispatch = useDispatch();
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
              <Link
                to={`/quizStart/${quiz._id}`}
                onClick={() => {
                  dispatch(resetToDefault());
                }}
              >
                <Button variant='outlined'>срезать гриб</Button>
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
