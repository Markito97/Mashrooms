import { Link, useParams } from 'react-router-dom';
import { useGetJSQuizzesQuery } from '../../redux';
import { getTypeOfPage } from '../../utils/getTypeOfPage';
import styles from './quizzesPage.module.css';
import { QuizCard } from '../../components/QuizCard/QuizCard';
import { addQuizes } from '../../redux/slices/quizzesSlice';
import { useDispatch } from 'react-redux';
export const QuizzesPage = () => {
  const { type } = useParams();
  const typeOfPage = getTypeOfPage(type);
  const { data, isLoading } = useGetJSQuizzesQuery(type);
  const dispatch = useDispatch();
  if (isLoading) {
    return null;
  } else {
    dispatch(addQuizes(data));
    return (
      <div className={styles.quizzesPageWrapper}>
        <div className={`${styles.header} ${styles[type]}`}>{typeOfPage}</div>
        <div className={styles.quizCardsContainer}>
          <QuizCard />
        </div>
      </div>
    );
  }
};
