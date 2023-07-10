import styles from './main.module.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button/Button';
import { ReactComponent as BackImg } from '../../assets/img/quizzesBackground.svg';

const Main = () => {
  return (
    <div className={styles.mainWrapper}>
      {/* <BackImg /> */}
      <Link to={'/quizzes'}>
        {' '}
        <Button variant='outlined'>Quizes</Button>
        Здесь будет всякая хуйня о сайте
      </Link>
    </div>
  );
};
export { Main };
