import styles from './header.module.css';
import { HeaderLogo } from './HeaderLogo';
import { Button } from '../ButtonControl/Button';
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <HeaderLogo />
      <Link to={'/main'}>
        <Button text='главная' />
      </Link>

      <Button text={'Личная грибница'} />
    </div>
  );
};
