import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import styles from "./header.module.css";
export const HeaderLogo = () => {
  return (
    <Link to={"/"}>
      <div className={styles.headerLogo}>
        <Logo />
        <span className={styles.logoText}>2MASLЁNKA</span>
      </div>
    </Link>
  );
};
