import { Link } from 'react-router-dom';
import styles from './quizes.module.css';
import { Quiz } from '../../components/Quiz/Quiz';
const Quizzes = () => {
  return (
    <div className={styles.quizesWrapper}>
      <Link to={'/quizzes/js'}>
        <Quiz quizType='JavaScript' color='yelow' />
      </Link>
      <Link to={'/quizzes/react'}>
        <Quiz quizType='React' color='red' />
      </Link>
      <Link to={'/quizzes/ts'}>
        <Quiz quizType='TypeScript' color='blue' />
      </Link>
      <Link to={'/quizzes/html'}>
        <Quiz quizType='HTML/CSS' color='blue' />
      </Link>
    </div>
  );
};
export { Quizzes };
