import styles from './footer.module.css';
export const Footer = () => {
  return (
    <div className='container'>
      <div className={styles.footerWrapper}>
        <div className={styles.footerText}>Корзинка для пожертвований:</div>
      </div>
    </div>
  );
};
