import { ReactComponent as Logo } from '..//../assets/icons/logo.svg';
import styles from './header.module.css';
export const HeaderLogo = () => {
  return (
    <div className={styles.headerLogo}>
      <Logo />
      <span className={styles.logoText}>2MASLЁNKA</span>
    </div>
  );
};
