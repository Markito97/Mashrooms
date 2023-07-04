import styles from './header.module.css';
import { HeaderLogo } from './HeaderLogo';
// import { Button } from '../ButtonControl/Button';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
export const Header = () => {
  return (
    <div className={styles.headerWrapper}>
      <Link to={'/main'}>
        <HeaderLogo />
      </Link>
      <Link to={'/main'}>
        <Button variant='outlined'>главная</Button>
      </Link>
      <Button variant='outlined'>Личная грибница</Button>
    </div>
  );
};
