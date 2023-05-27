import { Link, Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
const Layout = () => {
  return (
    <>
      <header>
        <div className='container'>
          <Header />
        </div>
      </header>

      <main>
        <div className='container'>
          <Outlet />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
export { Layout };
