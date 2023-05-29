import { Link, Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import styles from './Layout.module.css';
const Layout = () => {
  return (
    <div className={styles.layoutWrapper}>
      <header>
        <div className='container'>
          <Header />
        </div>
      </header>
      <main className={styles.main}>
        <div className='container'>
          {/* <div className={styles.outlerWrapper}> */}
          <Outlet />
          {/* </div> */}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export { Layout };
