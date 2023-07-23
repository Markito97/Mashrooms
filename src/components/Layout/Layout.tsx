import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import styles from "./Layout.module.css";
import { Container } from "@mui/material";
import { Footer } from "../Footer/Footer";
import { DynamicBreadCrumbs } from "../BreadCrumbs/DynamicBreadCrumbs.jsx";
const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <Header />
      <main className={styles.main}>
        <Container maxWidth="desktop">
          <DynamicBreadCrumbs />
          <div style={{ paddingTop: "60px", paddingBottom: "60px" }}>
            <Outlet />
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
export { Layout };
