import { useParams } from 'react-router-dom';
import { useGetJSQuizzesQuery } from '../../redux';
import { getTypeOfPage } from '../../utils/getTypeOfPage';
import styles from './quizzesPage.module.css';
import { QuizCard } from '../../components/QuizCard/QuizCard';
import { useState } from 'react';
export const QuizzesPage = () => {
  const { type } = useParams();
  const typeOfPage = getTypeOfPage(type);
  const { data, isLoading } = useGetJSQuizzesQuery(type);
  const [quizInfo, setData] = useState({});

  return (
    <div className={styles.quizzesPageWrapper}>
      <div className={`${styles.header} ${styles[type]}`}>{typeOfPage}</div>
      <div className={styles.quizCardsContainer}>
        {' '}
        <QuizCard quizInfo={quizInfo} />
      </div>
    </div>
  );
};
