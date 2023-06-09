import { Link, useParams } from 'react-router-dom';
import { getTypeOfPage } from '../../utils/getTypeOfPage';
import styles from './quizzesList.module.css';
import { QuizCard } from '../../features/quizzes/QuizCard';
import { useDispatch } from 'react-redux';

export const QuizzesList = () => {
  const { type } = useParams();
  const typeOfPage = getTypeOfPage(type);
  return (
    <div className={styles.quizzesPageWrapper}>
      <div className={`${styles.header} ${styles[type]}`}>{typeOfPage}</div>
      <div className={styles.quizCardsContainer}>
        <QuizCard />
      </div>
    </div>
  );
};
