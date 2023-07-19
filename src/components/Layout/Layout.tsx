import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import styles from "./Layout.module.css";
import { Container } from "@mui/material";
import { Footer } from "../Footer/Footer";

const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <main className={styles.main}>
        <Container maxWidth="desktop">
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
};
export { Layout };
