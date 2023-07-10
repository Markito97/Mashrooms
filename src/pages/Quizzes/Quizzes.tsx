import { Link } from 'react-router-dom';
import styles from './quizes.module.css';
import { QuizTopic } from '../../components/QuizTopic/QuizTopic';
const Quizzes = () => {
  return (
    <div className={styles.quizesWrapper}>
      <Link to={'/quizzes/JS'}>
        <QuizTopic quizType='JavaScript' color='yelow' />
      </Link>
      <Link to={'/quizzes/React'}>
        <QuizTopic quizType='React' color='white-blue' />
      </Link>
      <Link to={'/quizzes/TS'}>
        <QuizTopic quizType='TypeScript' color='blue' />
      </Link>
      <Link to={'/quizzes/HTML'}>
        <QuizTopic quizType='HTML/CSS' color='red' />
      </Link>
    </div>
  );
};
export { Quizzes };
