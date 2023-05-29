import { Link } from 'react-router-dom';
import styles from './quizes.module.css';
import { Quiz } from '../../components/Quiz/Quiz';
const Quizzes = () => {
  return (
    <div className={styles.quizesWrapper}>
      <Link to={'/quizzes/JS'}>
        <Quiz quizType='JavaScript' color='yelow' />
      </Link>
      <Link to={'/quizzes/React'}>
        <Quiz quizType='React' color='white-blue' />
      </Link>
      <Link to={'/quizzes/TS'}>
        <Quiz quizType='TypeScript' color='blue' />
      </Link>
      <Link to={'/quizzes/HTML'}>
        <Quiz quizType='HTML/CSS' color='red' />
      </Link>
    </div>
  );
};
export { Quizzes };
