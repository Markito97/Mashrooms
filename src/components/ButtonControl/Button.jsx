import styles from './button.module.css';
export const Button = ({ text, onclick, isDisabled }) => {
  return (
    <button
      className={styles.buttonControl}
      onClick={onclick}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
};
