import styles from './main.module.css';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ButtonControl/Button';

const Main = () => {
  return (
    <div className={styles.mainWrapper}>
      <Link to={'/quizzes'}>
        {' '}
        <Button text={'Quizes'}></Button>
      </Link>
      Здесь будет всякая хуйня о сайте
    </div>
  );
};
export { Main };
