import styles from './button.module.css';
export const Button = ({ text, onclick }) => {
  return (
    <button className={styles.buttonControl} onClick={onclick}>
      {text}
    </button>
  );
};
