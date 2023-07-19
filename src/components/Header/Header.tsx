import styles from "./header.module.css";
import { HeaderLogo } from "./HeaderLogo";
// import { Button } from '../ButtonControl/Button';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
export const Header = () => {
  const isAuth = useSelector((state: any) => state.auth.user);
  console.log("isAuth =>>", isAuth);
  return (
    <div className={styles.headerWrapper}>
      <Link to={"/main"}>
        <HeaderLogo />
      </Link>
      <Link to={"/main"}>
        <Button variant='outlined'>главная</Button>
      </Link>
      {isAuth ? (
        <Link to={"/profile"}>
          <Button variant='outlined'>Личная страница</Button>
        </Link>
      ) : (
        <Link to={"/login"}>
          <Button variant='outlined'>Регистрация</Button>
        </Link>
      )}
    </div>
  );
};
