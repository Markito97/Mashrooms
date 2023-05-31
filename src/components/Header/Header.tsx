import styles from './header.module.css';
import { HeaderLogo } from './HeaderLogo';
import { Button } from '../ButtonControl/Button';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Link to={'/main'}>
        <HeaderLogo />
      </Link>
      <Link to={'/main'}>
        <Button text='главная' />
      </Link>

      <Button text={'Личная грибница'} />
    </div>
  );
};
